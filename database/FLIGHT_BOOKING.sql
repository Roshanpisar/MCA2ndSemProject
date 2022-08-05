CREATE DATABASE IF NOT EXISTS `flightdb` ;
use `flightdb` ;
create table IF NOT EXISTS `user` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `uname` varchar(45) NOT NULL,
  `ugender` varchar(12) NOT NULL,
  `udob` date NOT NULL,
  PRIMARY KEY (`uid`)
);

create table IF NOT EXISTS `flight` (
  `fid` int(30) NOT NULL AUTO_INCREMENT,
  `flightName` varchar(50) NOT NULL,
  `total_seats` int,
  `available_seats` int,
  `fare_price` double,
  `route_id` int,
   PRIMARY KEY (`fid`)
);

create table IF NOT EXISTS `route` (
  `id` int NOT NULL AUTO_INCREMENT,
  `startPoint` varchar(50),
  `destination` varchar(50),
  PRIMARY KEY (`id`)
);

create table IF NOT EXISTS `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fid` int ,
  `uid` int ,
 `booking_date` date,
 `departure_date` date,
 `fare_amount` double,
 `seat_number` varchar(20),
  PRIMARY KEY (`id`)
);

create table IF NOT EXISTS `complaint`(
`complaint_id` int AUTO_INCREMENT,
`complaint_email` varchar(50) NOT NULL,
`complaint_phone` varchar(15),
`complaint_date` date,
`uid` int DEFAULT NULL,
`query` varchar(200) NOT NULL,
PRIMARY KEY(`complaint_id`)
);


create table IF NOT EXISTS `schedule`(
 `id` int AUTO_INCREMENT,
 `arrival_time` varchar(20),
 `departure_time` varchar(20),
 `fid` int,
 `arrival_date` date,
 `departure_date` date,
 PRIMARY KEY (`id`)
);



ALTER TABLE `booking` ADD FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);
ALTER TABLE `booking` ADD FOREIGN KEY (`fid`) REFERENCES `flight` (`fid`);
ALTER TABLE `complaint` ADD FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);
ALTER TABLE `flight` ADD FOREIGN KEY (`route_id`) REFERENCES `route` (`id`);
ALTER TABLE `schedule` ADD FOREIGN KEY (`fid`) REFERENCES `flight`(`fid`);


INSERT INTO `flightdb`.`user` (`uid`, `email`, `password`, `uname`, `ugender`, `udob`) VALUES ('1', 'admin@gmail.com', 'admin123', 'Admin', 'Male', '1994-03-14');
INSERT INTO `flightdb`.`user` (`uid`, `email`, `password`, `uname`, `ugender`, `udob`) VALUES ('2', 'laxman@gmail.com', 'laxman11', 'Laxman', 'Male', '1994-06-07');
INSERT INTO `flightdb`.`user` (`uid`, `email`, `password`, `uname`, `ugender`, `udob`) VALUES ('3', 'lavkesh@cybage.com', 'lavkesh11', 'Lavkesh', 'Male', '1996-05-25');
INSERT INTO `flightdb`.`user` (`uid`, `email`, `password`, `uname`, `ugender`, `udob`) VALUES ('4', 'komal@cybage.com', 'komal123', 'Komal', 'Female', '1997-04-17');
INSERT INTO `flightdb`.`user` (`uid`, `email`, `password`, `uname`, `ugender`, `udob`) VALUES ('5', 'madhusudan@cybage.com', 'madhu1234', 'Madhusudan', 'Male', '1995-11-07');

INSERT INTO `flightdb`.`route` (`id`, `startPoint`, `destination`) VALUES ('1', 'Mumbai', 'Delhi');
INSERT INTO `flightdb`.`route` (`id`, `startPoint`, `destination`) VALUES ('2', 'Pune', 'Delhi');
INSERT INTO `flightdb`.`route` (`id`, `startPoint`, `destination`) VALUES ('3', 'Delhi', 'Goa');
INSERT INTO `flightdb`.`route` (`id`, `startPoint`, `destination`) VALUES ('4', 'Delhi', 'Pune');
INSERT INTO `flightdb`.`route` (`id`, `startPoint`, `destination`) VALUES ('5', 'Kolkata', 'Agra');
INSERT INTO `flightdb`.`route` (`id`, `startPoint`, `destination`) VALUES ('6', 'Mumbai', 'Chennai');
INSERT INTO `flightdb`.`route` (`id`, `startPoint`, `destination`) VALUES ('7', 'Pune', 'Agra');
INSERT INTO `flightdb`.`flight` (`fid`, `flightName`, `total_seats`, `available_seats`, `fare_price`, `route_id`) VALUES ('1001', 'Vistara', '90', '15', '1200', '6');
INSERT INTO `flightdb`.`flight` (`fid`, `flightName`, `total_seats`, `available_seats`, `fare_price`, `route_id`) VALUES ('1002', 'Indigo', '120', '30', '1700', '3');
INSERT INTO `flightdb`.`flight` (`fid`, `flightName`, `total_seats`, `available_seats`, `fare_price`, `route_id`) VALUES ('1003', 'Air India', '110', '10', '2300', '1');

INSERT INTO `flightdb`.`booking` (`id`, `fid`, `uid`, `booking_date`, `departure_date`, `fare_amount`, `seat_number`) VALUES ('101', '1002', '5', '2022-03-14', '2022-03-17', '200', '44');
INSERT INTO `flightdb`.`complaint` (`complaint_id`, `complaint_email`, `complaint_phone`, `complaint_date`, `uid`, `query`) VALUES ('1', 'madhusudan@cybage.com', '8411999780', '2022-03-15', '5', 'flight booking sttaus is not updated ');

INSERT INTO `flightdb`.`schedule` (`id`, `arrival_time`, `departure_time`, `fid`,`arrival_date`, `departure_date`) VALUES ('10101', 'morning', 'afternoon', '1002','2022-03-12', '2022-03-12');
INSERT INTO `flightdb`.`schedule` (`id`, `arrival_time`, `departure_time`, `fid`,`arrival_date`, `departure_date`) VALUES ('10102', 'evening', 'morning', '1001','2022-03-11', '2022-03-12');


INSERT INTO `flightdb`.`flight` (`fid`, `flightName`, `total_seats`, `available_seats`, `fare_price`, `route_id`) VALUES ('1005', 'Vistara', '80', '17', '7000', '7');
INSERT INTO `flightdb`.`flight` (`fid`, `flightName`, `total_seats`, `available_seats`, `fare_price`, `route_id`) VALUES ('1006', 'Jet Airways', '60', '12', '5030', '2');
INSERT INTO `flightdb`.`flight` (`fid`, `flightName`, `total_seats`, `available_seats`, `fare_price`, `route_id`) VALUES ('1007', 'Air India', '110', '6', '8990', '4');

INSERT INTO `flightdb`.`schedule` (`id`, `arrival_time`, `departure_time`, `fid`, `arrival_date`, `departure_date`) VALUES ('10103', 'afternooon', 'night', '1007', '2022-03-15', '2022-03-15');
INSERT INTO `flightdb`.`schedule` (`id`, `arrival_time`, `departure_time`, `fid`, `arrival_date`, `departure_date`) VALUES ('10104', 'night', 'morning', '1003', '2022-03-16', '2022-03-17');
INSERT INTO `flightdb`.`schedule` (`id`, `arrival_time`, `departure_time`, `fid`, `arrival_date`, `departure_date`) VALUES ('10106', 'morning', 'morning', '1005', '2022-03-20', '2022-03-15');
INSERT INTO `flightdb`.`schedule` (`id`, `arrival_time`, `departure_time`, `fid`, `arrival_date`, `departure_date`) VALUES ('10107', 'afternoon', 'evening', '1006', '2022-03-21', '2022-03-21');

INSERT INTO `flightdb`.`booking` (`id`, `fid`, `uid`, `booking_date`, `departure_date`, `fare_amount`, `seat_number`) VALUES ('103', '1001', '3', '2022-03-16', '2022-03-12', '1800', '33');
INSERT INTO `flightdb`.`booking` (`id`, `fid`, `uid`, `booking_date`, `departure_date`, `fare_amount`, `seat_number`) VALUES ('104', '1005', '4', '2022-03-10', '2022-03-15', '2600', '23');
INSERT INTO `flightdb`.`booking` (`id`, `fid`, `uid`, `booking_date`, `departure_date`, `fare_amount`, `seat_number`) VALUES ('105', '1006', '2', '2022-03-09', '2022-03-21', '3200', '11');



CREATE VIEW flightview
AS SELECT schedule.arrival_time,schedule.departure_time,
schedule.arrival_date,schedule.departure_date,flight.flightName,
flight.fid,flight.fare_price,route.startPoint,
route.destination from schedule,flight,route where schedule.fid=flight.fid And flight.route_id =route.id;