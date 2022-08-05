package com.flight.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(RecordNotFoundException.class)
    public ResponseEntity<String> handleNoSuchElemntException(RecordNotFoundException exception) {
        return new ResponseEntity<String>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }
	@ExceptionHandler(EmailAlreadyExistException.class)
	public ResponseEntity<String> emailAlreadyExist(EmailAlreadyExistException exception){
		return new ResponseEntity<String>(exception.getMessage(), HttpStatus.NOT_FOUND);  
	} 
	

}
