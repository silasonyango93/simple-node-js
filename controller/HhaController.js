/*SON/2018-11-06 00:29 - DEVELOPMENT
This class is the session_logs table's route class.
It is initialized at the "Index.js" and is able to recieve
calls from the client and passes the calls down to the
"HhaService" class
*/

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const HhaService = require("../service/HhaService");
const { connectRabbitMQ } = require("../rabbitmq");
let rabbitChannel;

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {

  next();
});

router.post("/add_session_logs", urlencodedParser, function(request, response) {
  var jsonObject_ = {
    UserId: request.body.UserId,
    SessionStartDate: request.body.SessionStartDate,
    SessionEndDate: request.body.SessionEndDate,
    TermId: request.body.TermId,
    ActualWeekId: request.body.ActualWeekId,
    SessionYear: request.body.SessionYear
  };

  var myPromise = HhaService.insert(jsonObject_);

  myPromise.then(
      function(result) {
        var response_object = { results: result };
        response.send(response_object);
      },
      function(err) {
        console.log(err);
        response.send("An error occurred");
      }
  );
});

router.get('/fetch_all_records',urlencodedParser, async (request,response) => {
  let result = await HhaService.get_all_records_limit_1();
  response.send(result);
});

router.get('/fetch_all_records_limit_1', urlencodedParser, async (request, response) => {
  try {
    let result;

    // Ensure RabbitMQ connection is established before processing records
    const rabbitMQ = await connectRabbitMQ();
    if (!rabbitMQ || !rabbitMQ.channel) {
      throw new Error("Failed to establish RabbitMQ connection.");
    }
    rabbitChannel = rabbitMQ.channel; // Assign the channel after successful connection

    do {
      result = await HhaService.get_all_records_limit_1(); // Fetch new record

      if (result.length > 0) {
        let questionnaire = result[0];

        await HhaService.updateHasBeenFetched(questionnaire.QID);

        const queue = "hha_ingestion_queue";

        await rabbitChannel.assertQueue(queue, { durable: true });
        rabbitChannel.sendToQueue(queue, Buffer.from(JSON.stringify(questionnaire)), {
          persistent: true,
        });
      }

    } while (result.length > 0); // Keep looping while records exist

    response.send({ message: "All records fetched and updated." });
  } catch (error) {
    console.error("Error in fetch_all_records_limit_1:", error);
    response.status(500).send({ error: "Internal Server Error" });
  }
});


router.get('/fetch_milk_records', urlencodedParser, async (request, response) => {
  try {
    let result;

    // Ensure RabbitMQ connection is established before processing records
    const rabbitMQ = await connectRabbitMQ();
    if (!rabbitMQ || !rabbitMQ.channel) {
      throw new Error("Failed to establish RabbitMQ connection.");
    }
    rabbitChannel = rabbitMQ.channel; // Assign the channel after successful connection

    do {
      result = await HhaService.get_milk_records_limit_1(); // Fetch new record

      if (result.length > 0) {
        let questionnaire = result[0];

        await HhaService.updateMilkHasBeenFetched(questionnaire.QID);

        const queue = "hha_milk_ingestion_queue";

        await rabbitChannel.assertQueue(queue, { durable: true });
        rabbitChannel.sendToQueue(queue, Buffer.from(JSON.stringify(questionnaire)), {
          persistent: true,
        });
      }

    } while (result.length > 0); // Keep looping while records exist

    response.send({ message: "All records fetched and updated." });
  } catch (error) {
    console.error("Error in fetch_all_records_limit_1:", error);
    response.status(500).send({ error: "Internal Server Error" });
  }
});


module.exports = router;
