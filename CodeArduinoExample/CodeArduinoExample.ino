void setup()
{
 Serial.begin(9600);
}

void loop()
{
 int aleatorio = analogRead(0);
 Serial.println(aleatorio);
 delay(2000);  
}
