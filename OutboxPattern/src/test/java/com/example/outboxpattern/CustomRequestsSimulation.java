package com.example.outboxpattern;

import static io.gatling.javaapi.core.CoreDsl.StringBody;
import static io.gatling.javaapi.core.CoreDsl.global;
import static io.gatling.javaapi.core.CoreDsl.rampUsersPerSec;
import static io.gatling.javaapi.http.HttpDsl.header;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

import java.time.Duration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.stream.Stream;

import com.github.javafaker.Faker;
import io.gatling.javaapi.core.CoreDsl;
import io.gatling.javaapi.core.OpenInjectionStep.RampRate.RampRateOpenInjectionStep;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpDsl;
import io.gatling.javaapi.http.HttpProtocolBuilder;
import lombok.extern.slf4j.Slf4j;
import static io.gatling.javaapi.core.CoreDsl.constantUsersPerSec;


@Slf4j
public class CustomRequestsSimulation extends Simulation {
    private static final HttpProtocolBuilder HTTP_PROTOCOL_BUILDER = setupProtocolForSimulation();

    private static final Iterator<Map<String, Object>> FEED_DATA = setupTestFeedData();

    private static final ScenarioBuilder POST_SCENARIO_BUILDER = buildPostScenario();

    public CustomRequestsSimulation() {
        this.setUp(POST_SCENARIO_BUILDER.injectOpen(constantUsersPerSec(50).during(Duration.ofSeconds(15))))
                .protocols(HTTP_PROTOCOL_BUILDER);
    }

    private static HttpProtocolBuilder setupProtocolForSimulation() {
        return HttpDsl.http.baseUrl("http://localhost:1234")
                .acceptHeader("application/json")
                .maxConnectionsPerHost(10)
                .userAgentHeader("Gatling/Performance Test");
    }

    private static Iterator<Map<String, Object>> setupTestFeedData() {
        Iterator<Map<String, Object>> iterator;
        iterator = Stream.generate(() -> {
            Faker faker = new Faker();
            Map<String, Object> stringObjectMap = new HashMap<>();
            stringObjectMap.put("username", faker.name().firstName());
            stringObjectMap.put("email", faker.name().firstName() + "@gmail.com");
            stringObjectMap.put("password", faker.name().lastName() + "123");
            return stringObjectMap;
        }).iterator();
        return iterator;
    }

    private static ScenarioBuilder buildPostScenario() {
        return CoreDsl.scenario("Load Test Creating User")
                .feed(FEED_DATA)
                .exec(http("create-employee-request").post("/user/accounts")
                        .header("Content-Type", "application/json")
                        .body(StringBody("{ \"username\": \"${username}\", \"email\": \"${email}\", \"password\": \"${password}\"}"))
                        .check(status().is(200))
                );
    }

}
