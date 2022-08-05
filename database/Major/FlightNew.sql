Create DATABASE IF Not EXISTS `projectdb` ;
use `projectdb` ;
create table IF NOT EXISTS `user` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `gender` varchar(12) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `attempt` int NOT NULL,
  `role` varchar(45) NOT NULL,
  PRIMARY KEY (`userId`)
);

create table IF NOT EXISTS `flight` (
  `flightId` int NOT NULL AUTO_INCREMENT,
  `flightName` varchar(50) NOT NULL,
  `totalSeats` int,
  `arrivaltime` varchar(20),
  `departureTime` varchar(20),
  `flightDate` varchar(20),
  `source` varchar(50),
  `destination` varchar(50),
  `availableSeats` int,
  `offerId` int,
  `price` double,
   PRIMARY KEY (`flightId`)
);

create table IF NOT EXISTS `offer`(
`offerId` int AUTO_INCREMENT,
`offerName` varchar(50),
`discount` int ,
`flightId` int,
PRIMARY KEY(`offerId`)
);


create table IF NOT EXISTS `booking` (
 `bookingId` int NOT NULL AUTO_INCREMENT,
 `bookingDate` varchar(20),
 `amount` double,
 `seatNumber` int,
 `flightId` int ,
 `userId` int ,
  PRIMARY KEY (`bookingId`)
);


create table IF NOT EXISTS `complaint`(
`complaintId` int AUTO_INCREMENT,
`email` varchar(50) NOT NULL,
`phone` varchar(15),
`complaintDate` varchar(20),
`bookingId` int DEFAULT NULL,
`query` varchar(200) NOT NULL,
`action` varchar(20),
PRIMARY KEY(`complaintId`)
);

create table IF NOT EXISTS `feedback`(
`feedbackId` int AUTO_INCREMENT,
`email` varchar(50) NOT NULL,
`phone` varchar(15),
`feedbackDate` varchar(20),
`userId` int ,
`query` varchar(200) NOT NULL,
PRIMARY KEY(`feedbackId`)
);


ALTER TABLE `booking` ADD FOREIGN KEY (`flightId`) REFERENCES `flight` (`flightId`);
ALTER TABLE `booking` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);
ALTER TABLE `offer` ADD FOREIGN KEY (`flightId`) REFERENCES `flight` (`flightId`);
ALTER TABLE `feedback` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);
ALTER TABLE `complaint` ADD FOREIGN KEY (`bookingId`) REFERENCES `booking` (`bookingId`);
ALTER TABLE `flight` ADD FOREIGN KEY (`offerId`) REFERENCES `offer` (`offerId`);


INSERT INTO `projectdb`.`user` (`userId`, `email`, `password`, `name`, `phone`, `gender`, `dob`, `attempt`, `role`) VALUES ('1', 'admin@gmail.com', 'admin123', 'Admin', '9834551028', 'Male', '1994-03-14','0', 'admin');
INSERT INTO `projectdb`.`user` (`userId`, `email`, `password`, `name`, `phone`, `gender`, `dob`, `attempt`, `role`) VALUES ('2', 'laxman@gmail.com', 'laxman11', 'Laxman', '9734551027', 'Male', '1994-06-07','0', 'user');
INSERT INTO `projectdb`.`user` (`userId`, `email`, `password`, `name`, `phone`, `gender`, `dob`, `attempt`, `role`) VALUES ('3', 'lavkesh@cybage.com', 'lavkesh11', 'Lavkesh', '9034551120', 'Male', '1996-05-25','0', 'user');
INSERT INTO `projectdb`.`user` (`userId`, `email`, `password`, `name`, `phone`, `gender`, `dob`, `attempt`, `role`) VALUES ('4', 'komal@cybage.com', 'komal123', 'Komal', '9812345028', 'Female', '1997-04-17',0,'0' 'user');
INSERT INTO `projectdb`.`user` (`userId`, `email`, `password`, `name`, `phone`, `gender`, `dob`, `attempt`, `role`) VALUES ('5', 'madhusudan@cybage.com', 'madhu1234', '9834354528', 'Madhusudan', 'Male', '1995-11-07','0', 'user');

INSERT INTO `projectdb`.`flight` (`flightId`, `flightName`, `totalSeats`, `arrivaltime`, `departureTime`, `date`, `from`, `to`, `availableSeats`, `price`) VALUES ('101', 'Air India', '70', '10.00 am', '11.00 am', '2022-04-12', 'Mumbai', 'Pune', '10', '700');
INSERT INTO `projectdb`.`flight` (`flightId`, `flightName`, `totalSeats`, `arrivaltime`, `departureTime`, `date`, `from`, `to`, `availableSeats`, `price`) VALUES ('102', 'Vistara', '80', '1.00 pm', '1.30 pm', '2022-04-13', 'Chennnai', 'Delhi', '15', '850');

