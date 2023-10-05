var MSG = {
  title: "BIPES",
  blocks: "Bloques",
  files: "Archivos",
  shared: "Shared",
  device: "Dispositivo",
  linkTooltip: "",
  runTooltip: "Ejecute el programa definido por los bloques en el área de trabajo.",
  badCode: "Error del programa:\n%1",
  timeout: "Se excedio el máximo de iteraciones ejecutadas permitidas.",
  trashTooltip: "Descartar todos los bloques.",
  catLogic: "Lógica",
  catLoops: "Secuencias",
  catMath: "Matemáticas",
  catText: "Texto",
  catLists: "Listas",
  catColour: "Color",
  catVariables: "Variables",
  catFunctions: "Funciones",
  listVariable: "lista",
  textVariable: "texto",
  httpRequestError: "Hubo un problema con la petición.",
  linkAlert: "Comparte tus bloques con este enlace:\n\n%1",
  hashError: "«%1» no corresponde con ningún programa guardado.",
  xmlError: "No se pudo cargar el archivo guardado.  ¿Quizá fue creado con otra versión de Blockly?",
  badXml: "Error de análisis XML:\n%1\n\nSelecciona OK para abandonar tus cambios o Cancelar para seguir editando el XML.",
  saveTooltip: "Guardar bloques a archivo.",
  loadTooltip: "Leer bloques desde archivo.",
  notificationTooltip: "Panel de notificaciones.",
  ErrorGET: "Error al cargar el archivo seleccionado.",
  invalidDevice: "Dispositivo invalido",
  languageTooltip: "Cambiar lenguaje.",
  noToolbox: "The device has no toolbox set.",
  networkTooltip: "Conectar (WebREPL, http).",
  serialTooltip: "Conectar a travez de serial/USB o Bluetooth (Web Serial API, https).",
  toolbarTooltip: "Show toolbar",
  wrongDevicePin: "Verificar pines, el dispositivo cambio!",
  notDefined: "Sin definir.",
  editAsFileValue: "Editar como archivo.",
  editAsFileTooltip: "Editar codigo python y guardar en sistema de archivos del dispositivo.",
  forumTooltip: "Ayuda",
  accountTooltip: "Proyecto y configuraciones.",
  blocksLoadedFromFile: "Bloques leidos desde archivo  '%1'.",
  deviceUnavailable: "Dispositivo '%1' no disponible.",
  notConnected: "Sin conexion para enviar datos.",
  serialFroozen: "Conexion serial no responde.",
  notAvailableFlag: "$1 no disponible en el navegador.\r\nAsegurarse que la bander $1 este habilitada.",

  //Blocks
  block_delay: "pausa",
  seconds: "segundos",
  milliseconds: "milisegundos",
  microseconds: "microsegundos",
  to: "valor",
  setpin: "Configurar valor del pin",
  pin: "pin",
  read_digital_pin: "leer entrada digital",
  read_analog_pin: "leer entrada analoga",
  show_iot: "show on IoT tab",
  data: "valor",
  set_rtc: "set date and time",
  get_rtc: "get date and time",
  year: "año",
  month: "mes",
  day: "dia",
  hour: "hora",
  minute: "minuto",
  second: "segundo",
  wifi_scan: "escanear redes wifi",
  wifi_connect: "conectar a red wifi",
  wifi_name: "nombre red wifi",
  wifi_key: "password red wifi",
  easymqtt_start: "EasyMQTT Start",
  easymqtt_publish: "EasyMQTT Publish Data",
  topic: "topic",
  session_id: "session ID",
  file_open: "abrir archivo",
  file_name: "nombre archivo",
  file_mode: "modo",
  file_binary: "abrir en modo binario",
  file_close: "cerrar archivo",
  file_write_line: "escribir linea a archivo",
  file_line: "linea",
  try1: "try",
  exp1: "except",
  ntp_sync: "sync date and time with NTP",
  timezone: "zona horaria",
  project_info: "Proyecto",
  project_info_author: "Autor",
  project_info_desc: "Descripcion",
  easymqtt_subscribe: "EasyMQTT subscribe to topic",
  when: "when",
  data_received: "is received",
  easymqtt_receive: "EasyMQTT receive data",
  relay: "rele",
  on: "encender",
  off: "apagar",
  relay_on: "rele en pin",
  yes: "si",
  no: "no",
  wait_for_data: "wait for data",
  dht_start: "Inicializar DHT Sensor",
  dht_measure: "Actualizar lectura sensor DHT11/22",
  dht_temp: "obtener DHT11/22 temperatura",
  dht_humi: "obtener DHT11/22 humedad",
  type: "tipo",

  //Ultrasound
  hcsr_install: "Instalar libreria HCSR04",
  hcsr_init: "Inicializar sensor ultrasonico HCSR04",
  hcsr_timeout: "timeout (us)",
  echo_pin: "echo pin",
  trigger_pin: "trigger pin",
  get_distance: "Obtener distancia (Sensor ultrasonico)",
  measure_distance: "Medir distancia con sensor ultrasonico",

  //BMP180
  pressure: "presion",
  temperature: "temperatura",
  altitude: "altitud",
  bmp180_init: "Inicializar BMP180",

  //SHT20
  init_sht20: "Inicializar SHT20",
  humidity: "humedad",
  
  //Network
  net_http_get: "HTTP GET Request",
  net_http_get_status: "HTTP Status code",
  net_http_get_content: "HTTP Response content",
  net_http_server_start: "Start HTTP Web Server",
  net_http_server_start_port: "Port",
  net_http_server_wait: "Wait for HTTP Client",
  net_http_server_requested_page: "Requested Web Page",
  net_http_server_send_response: "Send HTTP Response",
  net_http_server_send_html: "HTML",

  // MQTT
  mqtt_init: "Start MQTT Client",
  server_address: "Server Address",
  server_port: "Server Port",
  username: "Username",
  password: "Password",
  mqtt_add_to_buffer: "Add Data to MQTT Buffer",
  field_name: "Field Name",
  value: "Value",
  mqtt_publish_buffer: "Publish Buffer to MQTT Topic",
  mqtt_topic: "Topic",
  qos: "QOS:",
  mqtt_most_once: "0 - at most\u00A0once",
  mqtt_least_once: "1 - at least\u00A0once",
  mqtt_publish_payload: "Publish Payload to MQTT Topic",
  payload: "Payload",
  mqtt_subscribe: "Subscribe to MQTT Topic",
  mqtt_set_callback: "Set Callback to MQTT Messages",
  with: "with",
  received_from: "received from",
  do: "do",
  mqtt_callback_tooltip: "Callback function must have topic and msg parameters",
  mqtt_check_msg: "Check MQTT Server for pending messages",
  mqtt_check_msg_tooltip: "Check if the server has any pending messages. Non-blocking method. Subscription messages will be passed to the callback.",
  mqtt_wait_msg: "Wait for MQTT Server messages",
  mqtt_wait_msg_tooltip: "Wait for server sending any message. Blocking method. Subscription messages will be passed to the callback.",
  mqtt_disconnect: "Disconnect MQTT Client",
  mqtt_disconnect_tooltip: "Disconnect the MQTT Client from Server.",

  //PWM
  pwm_num: "PWM #",
  frequenzy: "Frecuencia",
  duty_cycle: "Ciclo util",
  pwm_num_pico: "RPi Pico PWM #",
  pwm_tooltip: "Inicializar PWM con frecuencia (1Hz to 40MHz) y ciclo util (0-1023)",
  pwm_freq_tooltip: "Configurar PWM frecuencia de 1Hz a 40MHz",
  pwm_duty_tooltip: "Configurar PWM ciclo util de 0-1023",
  pwm_init: "Inicializar",
  pwm_init_tooltip: "Inicializar PWM",
  pwm_deinit: "De-Inicializar PWM #",

  //NeoPixel
  np_init: "Inicializar NeoPixel",
  np_num_leds: "Numero de LEDs",
  np_init_tooltip: "Inicializar Neopixel en el pin especificado",
  np_controll: "Controlar NeoPixel",
  color: "Color",
  np_controll_tooltip: "Set NeoPixel",
  np_write: "Escribir NeoPixel",
  red: "Rojo",
  green: "Verde",
  blue: "Azul",
  np_write_tooltip: "Escribir NeoPixel",
  np_color_tooltip_rgb: "NeoPixel LED RGB Valores 0-255",
  np_color_tooltip_picker: "NeoPixel LED , escoge un color",
  hue: "Matiz",
  saturation: "Saturacion",
  lightness: "Brillo",
  np_color_tooltip_HSL: "Matiz a RGB color, Matiz desde 0º a 360º, Saturacion y Brillo de 0% hasta 100%.",

  //I2C Char LCD
  i2c_lcd_init: "Inicializar I2C Character LCD Display",
  i2c_lcd_lines: "Lineas",
  i2c_lcd_col: "Columnas",
  i2c_lcd_clear: "Limpiar LCD",
  i2c_lcd_write: "Escribir texto a la LCD",
  text: "Texto",
  i2c_lcd_move: "Mover curso LCD hacia",
  i2c_lcd_backlight: "LCD Luz trasera",
  i2c_lcd_backlight_tooltip: "Configurar a true o false o 1/0",
  i2c_lcd_power: "LCD Power",
  i2c_lcd_power_tooltip: "Configurar a true o false o 1/0",

  //RC Servo Motor
  servo_init: "Inicializar RC Servo Motor",
  servo_init_tooltip: "Inicializar RC servo motor",
  servo_move: "Mover Servo Motor",
  angle: "Angulo",

  //Stepper Motor
  stepper_init: "Inicializar Stepper Motor",
  stepper_step: "Pasos del motor",
  steps: "Pasos",

  //DC Motor
  dc_motor_init: "Inicializar DC Motor",
  dc_motor_power: "Configurar DC Motor Energia",
  power: "Energia",
  dc_motor_dir: "Configurar Direccion Motor DC ",
  direction: "Direccion",
  dc_motor_stop: "Detener DC Motor DC",

  //Sound
  sound_tone: "Tono (Hz)",
  sound_duration: "Duracion (s):",
  sound_infinite: "(0 fpara duracion infinita)",
  sound_tone_tooltip: "Sonido - Generador de tonos",
  sound_note: "Reproduce nota musical",
  note: "Nota",
  sound_note_tooltip: "Sonido - Generador de tonos(nota musical)",
  rtttl_play: "Tocar cancion (RTTTL)",
  song: "Cancion",

  //Splash screen
  splash_welcome: "Bienvenida a BIPES",
  splash_footer: "Do not show this screen again",
  splash_close: "Close",
  splash_message: "<p><b>BIPES: Block based Integrated Platform for Embedded Systems</B> allows text and block based programming for several types of embedded systems and Internet of Things modules using MicroPython, CircuitPython, Python or Snek. You can connect, program, debug and monitor several types of boards using network, USB or Bluetooth. Please check a list of <a href=https://bipes.net.br/wp/boards/>compatible boards here</a>. Compatible boards include STM32, ESP32, ESP8266, Raspberry Pi Pico and even Arduino.  <p><b>BIPES</b> is fully <a href=https://bipes.net.br/wp/development/>open source</a> and based on HTML and JavaScript, so no software install or configuration is needed and you can use it offline! We hope BIPES is useful for you and that you can enjoy using BIPES. If you need help, we now have a <a href=https://github.com/BIPES/BIPES/discussions>discussion forum</a>, where we also post <a href=https://github.com/BIPES/BIPES/discussions/categories/announcements>new features and announcements about BIPES</a>. Feel free to use it! Also, we invite you to use the forum to leave feedbacks and suggestions for BIPES!</p><p>Now you can easily load MicroPython on your ESP32 or ESP8226 to use with BIPES: <a href=https://bipes.net.br/flash/esp-web-tools/>https://bipes.net.br/flash/esp-web-tools/</a></p> <p>Thank you from the BIPES Team!</p>"



};

//Toolbox categories
Blockly.Msg['CAT_TIMING'] = "Tiempo";
Blockly.Msg['CAT_MACHINE'] = "Microcontrolador";
Blockly.Msg['CAT_DISPLAYS'] = "Displays";
Blockly.Msg['CAT_SENSORS'] = "Sensores";
Blockly.Msg['CAT_OUTPUTS'] = "Salidas / Actuadores";
Blockly.Msg['CAT_COMM'] = "Comunicacion";
Blockly.Msg['CAT_TEMP_HUMI'] = "Temperatura y Humedad";
Blockly.Msg['CAT_PRESS'] = "Presion";
Blockly.Msg['CAT_FILES'] = "Archivos";
Blockly.Msg['CAT_NET'] = "Redes e Internet";
Blockly.Msg['CAT_CONTROL'] = "Control";
Blockly.Msg['CAT_IMU'] = "Acelerometro y Giroscopio";
Blockly.Msg['CAT_AIR'] = "Calidad del aire";
Blockly.Msg['CAT_ULTRASOUND'] = "Sensor Ultrasonico";
Blockly.Msg['CAT_NEO'] = "Tira NeoPixel LED";
Blockly.Msg['CAT_CHAR_DISP'] = "Display de caracteres";
Blockly.Msg['CAT_RELAY'] = "Rele";
Blockly.Msg['CAT_SERVO'] = "RC Servo Motor";
Blockly.Msg['CAT_STEPPER'] = "Motor a pasos";
Blockly.Msg['CAT_DC_MOTOR'] = "Motor Corriente Continua";

//Toolbox Text
Blockly.Msg['TXT_ULTRASOUND_DESCRIPTION'] = "HCSR04 Sensor Ultrasonico";
Blockly.Msg['TXT_ULTRASOUND_LIB'] = "Instalar libreria HCSR04";
Blockly.Msg['TXT_SERVO_DESCRIPTION'] = "RC Servo Motor";
Blockly.Msg['TXT_STEPPER_DESCRIPTION'] = "Motor a pasos";
Blockly.Msg['TXT_DC_MOTOR_DESCRIPTION'] = "Motor DC";
