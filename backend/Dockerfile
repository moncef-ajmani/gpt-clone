# Use an official Maven image as a build stage
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline


COPY src ./src
RUN mvn package


FROM openjdk:17
WORKDIR /app
COPY --from=build /app/target/*.jar backend.jar
EXPOSE 8080

CMD ["java", "-jar", "backend.jar"]