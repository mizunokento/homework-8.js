void setup() {
  // put your setup code here, to run once:
   
  Serial.begin(9600);

}

void loop() {
  int sensorValue = analogRead(A0);
  Serial.println(sensorValue);
  if(sensorValue<20){
  pinMode(8,OUTPUT);
  digitalWrite(8,HIGH);
  delay(sensorValue);
  digitalWrite(8,LOW);
  delay(sensorValue);}
    if(sensorValue>160){
  pinMode(6,OUTPUT);
  digitalWrite(6,HIGH);
  delay(sensorValue);
  digitalWrite(6,LOW);
  delay(sensorValue);}
   
 

}
