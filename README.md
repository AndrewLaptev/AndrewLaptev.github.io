<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/1998/1998161.png" alt="Logo" width="125" height="125">

<h3 align="center">NIRMA 621308</h3>

  <p align="center">
    Development of mechanisms for designing the processes of users' vital activity into the ecosystem of their digital assistants
  </p>
</div>

## About
Our project is aimed at stabilizing the psycho-emotional state of users through the personalization of artificial lighting in space. The determination of the psycho-emotional state is based on data from the ecosystem of digital assistants. The project consists of three software modules.

### Why use it
It is necessary to use the software created within the framework of the project to personalize artificial lighting when using multiple luminaires by several users at the same time. It is also important to note that you can change the lighting parameters at will, and taking into account data about your psycho-emotional state.

### For whom
This software is necessary for:
- people who want to improve or stabilize their psychoemotional state
- users who have adjustable luminaires or light sources who want to personalize their lighting (especially if several people want to change lighting settings)
- employers who want to increase the efficiency of employees and reduce the fatigue of their employees

## Software modules
The project consists of three software modules (each of which performs its own highly specialized tasks) to stabilize and normalize the psycho-emotional state of users:
- **Software module for localization of owners of digital assistants according to mobile device data** ([BLight](https://github.com/AndrewLaptev/ble_light_mobile)) - performs the tasks of determining the user's location to find the nearest light sources so that the user controls the nearest luminaires to him
- **Software module for normalization of the psycho-emotional state and personalization of the environment through artificial lighting** ([BLightESP32](https://github.com/AndrewLaptev/ble_light_esp32)) - performs the tasks of controlling lighting parameters through changes in color temperature and luminous flux of the luminaire
- **Software module for recognizing a psychoemotional state based on data from the ecosystem of digital assistants** ([CoreEmotion](https://github.com/TimurSamigulin/core-emotion)) - is designed to determine the user's psycho-emotional state by text messages exchanged between people in the Avatar ecosystem
