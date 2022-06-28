'use strict';
(self.webpackChunkmy_webpage_revamped =
  self.webpackChunkmy_webpage_revamped || []).push([
  [292],
  {
    4779: function (e, M, i) {
      i.r(M),
        i.d(M, {
          default: function () {
            return f;
          },
        });
      var t,
        I = i.p + '32458e8ea01881dddaa6.jpg',
        g = i(7294),
        N = i(682),
        n = i(4051),
        T = i(1555),
        o = i(8981),
        a = i(4098),
        r = i(8738),
        j = i(1089),
        s = i(6025),
        c = i(7763),
        D = i(9603),
        C = JSON.parse(
          '[{"title":"This Webpage","subtitle":"My portfolio website using React","summary":["Having originally started development on this website in December 2021, I have been continually updating it as I\'ve learned more techniques in frontend developement.","Objective was to create a space to share my skills and projects, along with industrial experience. and develop my skill in front-end dev at the same time","Main libraries used: react-router, framer-motion, react-bootstrap"],"description":"This webpage was built using React with Bootstrap to help in the layouts. React-router was used for routing and framer-motion for the animations. No template was used, as I wanted to fashion the website from the ground up, so I could impart my own style and also maximise the learning experience. This webpage was also manually configured using Webpack."},{"title":"Thinking in 3 Dimensions","subtitle":"3D printing","summary":["Extensive experience in building and maintaining 3D printers","Parametric modelling in Fusion360 to develop parts for own projects","Marketed 3d printing services to supplement financial cost of hobby"],"description":"I got into 3d printing as a hobby as I found the ability to fabricate parts at home exciting, and useful for electronic projects. I also liked the idea that a hobbyist like myself could harness such seemingly cutting-edge technology, thanks to the open-source nature of the 3d printing community. \\nI first started in 2017, when I built a cheap 3d printer out of parts from China to minimise cost. Since then, I\'ve honed my ability to debug the myriad of errors that 3d printers can encounter and how to fix them to get great prints. Addtionally I\'ve also done some 3d modelling in Autodesk Fusion360 to make my own parts for projects. \\nNow I\'m using a printer that is considerably better than the one i first started with, upgraded with custom components to enhance print quality. I\'ve also marketed 3d printing services, which has almost entirely eliminated the financial cost of the hobby."},{"title":"Smart Room","subtitle":"Making regular room appliances smart","summary":["Objective was to enhance the convenience features of appliances in my room","Remote controls of appliances wired up to GPIO pins of Raspberry Pi, which acted as a backend server for controlling all appliances in room","Built simple android app to communicate with Raspberry Pi server, so phone served as unified remote","Utilised Alexa Skills Kit (ASK) to add voice control by using alexa device to send the interpreted commands to the Raspberry Pi server"],"description":"This project was born from the desire to make the simple remote-controlled appliances in my room like the fan, lights and air-conditioning \'smart\' (an example would be turning on the lights at a specific time of day). \\nThe main problem I faced stemmed from the fact that these devices were not designed to be \'smart\', hence to interface the applicances with my Raspberry Pi (the control hub), I had to wire up their remote controls to the GPIO outputs of the Pi, and write python programs that triggered the right output (with correct timing of \'button presses\') depending on the action wanted. \\nWith the Raspberry Pi as a backend server, I later built a simple android app to control the devices through my phone (to use as my unified remote control for all appliances), and also incorporated voice control through the Alexa Skills Kit (ASK)."},{"title":"Fridge View Bot","subtitle":"A Telegram bot to reduce food waste","summary":["University module sustainability project","Utilised python-telegram-bot module to build the bot","Raspberry Pi backend server, with data logging and storage of user information in pickle files, along with image storage."],"description":"This was a project I undertook for a sustainability module I took in the National University of Singapore (NUS), GEH1074. It was designed to be a solution to the problem of food wastage by hostel residents who left food till expiry in hostel fridges, either by forgetting or not being able to finish their food. \\nA Telegram bot was chosen as Telegram is an application used by pretty much everyone in NUS, thus reducing the onboarding process. Fridge view bot provided students with a convenient platform to log the food they placed in the refrigerators, and put their items up for sharing in the bot when they were nearing expiry and they could not finish them. Fridge view bot also sent reminders to students as their items neared expiry. \\nOne problem faced in implemenation was how to allow other people to know where a shared item was in the fridge. A simple solution I came up with was to incorporate storing of images of the locations of the items in the fridge on the backend server, and sending the image to a user corresponding to the item being retrieved by that user."},{"title":"Pong Connect","subtitle":"Multiplayer Pong over the Internet","summary":["Project undertaken purely out of interest","Based on the CS50 game development course pong game, with some enhancements, the main one being internet multiplayer","Client Hosted multiplayer set-up"],"description":"This was a fun mini-project I undertook as I was trying out Harvard\'s CS50 Game Development course. I was interested in the complexities of implementing a multiplayer game (which I discovered were immense as I researched for the project).\\nI settled on a simple setup whereby one player would be the server and the other the client. The game would essentially run on the server machine, and deliver and receive data from the client via UDP packets. The game was designed to be able to handle lost packets as long as not too many were lost. Upon playing the finished game, an acceptable framerate of around 40-60 fps with little choppiness being observed on the client\'s computer.\\nWhile the premise of the project, the game pong, is extremely simple, by simply trying to make a multiplayer version, it became a lot more complex and exposed me to some of challenges faced in multiplayer game development, like handling packet delays/losses, interpolation etc. It was also pretty fun to play the finished product with a friend! "}]'
        );
      function L(e, M) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          M &&
            (t = t.filter(function (M) {
              return Object.getOwnPropertyDescriptor(e, M).enumerable;
            })),
            i.push.apply(i, t);
        }
        return i;
      }
      function y(e) {
        for (var M = 1; M < arguments.length; M++) {
          var i = null != arguments[M] ? arguments[M] : {};
          M % 2
            ? L(Object(i), !0).forEach(function (M) {
                l(e, M, i[M]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : L(Object(i)).forEach(function (M) {
                Object.defineProperty(
                  e,
                  M,
                  Object.getOwnPropertyDescriptor(i, M)
                );
              });
        }
        return e;
      }
      function l(e, M, i) {
        return (
          M in e
            ? Object.defineProperty(e, M, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[M] = i),
          e
        );
      }
      !(function (e) {
        (e.CAREER_EXPERIENCE = 'Career Experience'),
          (e.ACHIEVEMENTS = 'Achievements'),
          (e.PROJECTS = 'Projects');
      })(t || (t = {}));
      var A = [
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB2aWV3Qm94PSIwIDAgNDI2LjAwMDAwMCAzODQuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzODQuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMEIzOTQ4IiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTk4NiAzNjg0IGMtNDMgLTggLTE0MCAtMzcgLTIxNSAtNjUgLTMwNiAtMTE0IC0zODMgLTEzOCAtNTQxIC0xNzQKLTkxIC0yMCAtMTcyIC0zOSAtMTgwIC00MiAtOCAtNCAtMTggLTUgLTIzIC01IC0xNCAzIC0yMTIgLTQ3IC0yODcgLTcyIC00MQotMTQgLTk0IC0yNiAtMTE4IC0yNiAtODcgMCAtMTMwIC0zNiAtMTIwIC0xMDAgMTEgLTc0IDE1NCAtODcgMzQzIC0zMSA2MSAxNwoxMTcgMzUgMTI1IDM4IDggMyAxOCA2IDIyIDUgMTEgLTIgMjczIDU2IDQwMyA5MCA2NiAxNyAxNzkgNTMgMjUwIDgwIDM3OCAxNDQKMzUxIDEzNiAzNTkgOTcgMyAtMTcgNiAtNDYgNiAtNjQgMCAtMTcgMiAtMzQgNSAtMzcgNyAtNyA5IC01MTkgMiAtNTM4IC0zIC04Ci05IC0xNTkgLTEzIC0zMzUgLTkgLTQ0NiAtOSAtNDQ1IC0yOCAtNDkwIC01NiAtMTMxIC0zNzIgLTEwMTQgLTQwMiAtMTEyMCAtOQotMzMgLTE3IC05NyAtMTggLTE0MiAtMSAtNDUgLTUgLTg1IC05IC04OSAtMTEgLTExIC04IC0yOTIgMiAtMjk5IDYgLTMgNyAtMjcKNCAtNTQgLTggLTY3IDIwIC0xNTYgNjEgLTE5NyA0NSAtNDUgOTIgLTUyIDE1MCAtMjQgNjMgMzAgMTg0IDE2MiAyMjQgMjQyIDM4Cjc4IDk0IDI0NyA4OCAyNjUgLTMgNyAtMSAxNSA0IDE4IDExIDcgMzQgMTQxIDI2IDE1NCAtNCA1IC0yIDEyIDMgMTUgMTEgNyAzNQoxMzIgMjcgMTQ1IC00IDUgLTEgMTMgNCAxNiA2IDQgMTAgMTcgOSAyOCAtMSAxMiAxIDI5IDQgMzcgMTYgMzggMjggMzU2IDI2CjY2MyAtMSAxODUgMSAzNDAgNSAzNDQgMyAzIDYgMjYgNiA0OSAwIDQ0IDIzIDEwMSAxMjggMzI0IDI3IDU4IDg0IDE4NCAxMjcKMjgwIDQyIDk2IDgwIDE3OCA4NCAxODIgOSAxMCA2IC02MyAtNCAtODUgLTQgLTEwIC01IC00MCAtMiAtNjcgMyAtMjcgMiAtNTIKLTIgLTU0IC03IC01IC0yMCAtMTE4IC0yNiAtMjMxIC0xIC0yMiAtNiAtNDggLTEwIC01OSAtNSAtMTAgLTkgLTkxIC05IC0xODAKLTEgLTE0NSAxIC0xNjQgMTkgLTE5NiAxMyAtMjEgMzUgLTQwIDU3IC00OCAzMyAtMTMgNDEgLTEyIDc1IDQgMjEgMTEgNDMgMzAKNTAgNDQgMjQgNTIgMzYgMjAyIDMwIDM5NiAtMyAxMDYgLTEgMTk2IDMgMjAwIDEyIDEzIDQyIDI0MyAzNiAyNzAgLTQgMTMgLTIKMjYgNCAyOSA1IDMgMTAgMjEgMTAgMzggMCA2NCAxNiA1NiAzNCAtMTYgNjggLTI2NSAxNDIgLTQ1NSAxOTYgLTUwMSA2OCAtNTcKMTYwIC01NCAyMjIgNyA3NiA3NSAxOTggMjQxIDMwNCA0MTQgbDE5IDMxIDAgLTk4IGMwIC01NCAtMyAtMTAyIC03IC0xMDYgLTEzCi0xMyAtMTAgLTM0MiAzIC0zNTAgOCAtNSAxMCAtMzUgNiAtOTcgLTUgLTc2IC0zIC05OCAxNSAtMTQ2IDM3IC05OCAxMjIgLTE2MAoyMDAgLTE0NCAxNyAzIDQ1IDIxIDYzIDM4IDMwIDMwIDMyIDM4IDMwIDg4IC0yIDM3IC0xMCA2OCAtMjUgOTIgLTIyIDM2IC0yMgozOSAtMTUgMjYxIDQgMTIzIDggMzcyIDEwIDU1MyAxIDE4MSA1IDMzMyA3IDMzNyAzIDUgMTEgNjEgMTggMTI0IDE0IDEzMCA1CjE3MyAtNDQgMjA1IC02MSA0MCAtMTU5IC0xNyAtMTYwIC05MiAtMSAtMjEgLTQgLTQyIC03IC00OCAtNCAtNSAtMTYgLTQyIC0yOAotODIgLTEzIC00MyAtNDMgLTEwNCAtNzQgLTE1MiAtMjkgLTQ0IC04NiAtMTM2IC0xMjcgLTIwMyAtMTY2IC0yNzEgLTI3MwotNDE5IC0yOTEgLTQwMSAtNCA0IC00NiAxMjEgLTkzIDI2MCAtOTIgMjc0IC0xNTIgNDE1IC0xODUgNDMyIC0xMSA3IC0zMSAzMwotNDMgNTkgLTM3IDc1IC0xMTAgODQgLTE1MSAxNyAtNjUgLTEwNSAtMjE3IC0zOTUgLTMxMiAtNTk3IGwtMTEyIC0yMzggLTUKMTc4IGMtMyA5NyAtMSAxODEgMyAxODYgMTEgMTIgMTIgMzUwIDIgMzYwIC01IDQgLTggMzggLTggNzQgLTEgMTAyIC0xNSAyNTQKLTI3IDI4NSAtMTIgMzEgLTU1IDU4IC05MCA1NiAtMTMgLTEgLTU5IC04IC0xMDIgLTE1eiBtLTExIC0yMTU2IGMtMyAtMjQgLTcKLTEzNyAtOSAtMjUzIC0yIC0xMTUgLTcgLTIxOCAtMTEgLTIyOCAtNCAtOSAtNSAtMjcgLTIgLTM4IDMgLTEyIDIgLTI5IC0zCi0zOCAtNSAtOSAtMTYgLTY1IC0yNSAtMTI2IC0xNyAtMTEzIC0zOCAtMjA3IC01NyAtMjYwIC0yNCAtNjYgLTExMCAtMjMzCi0xMjggLTI1MCAtMjAgLTE4IC0yMCAtMTcgLTIwIDI3IDAgMjQgLTMgNDcgLTYgNTEgLTcgNyAtOCAzNDQgLTEgMzY3IDMgOCAxMAo0MiAxNyA3NSAxMiA1NiA1NyAxOTAgMTgwIDUzNSAyOSA4MCA1MyAxNTIgNTUgMTYwIDUgMjEgNCAyMCAxMCAyMCAyIDAgMiAtMTkKMCAtNDJ6Ii8+CjxwYXRoIGQ9Ik0xMDU1IDMxNDMgYy0xMSAtMiAtMjcgLTcgLTM1IC0xMCAtOCAtMyAtMTggLTYgLTIyIC01IC0xNCAzIC0xNzcKLTU3IC0yMzggLTg4IC05MSAtNDYgLTI0NiAtMTQ1IC0zMDYgLTE5NyAtNTYgLTQ3IC02OCAtNzYgLTQ5IC0xMjAgMTIgLTI5IDY5Ci02MyA4MiAtNDkgMTYgMTYgMzMgLTE4IDI3IC01NSAtNCAtMjEgLTMgLTQ2IDEgLTU2IDggLTIxIDExIC0zNTUgMyAtMzY5IC01Ci04IC00IC0zNDkgMSAtMzQ5IDEgMCA0IC0yNDAgNiAtNTM0IGw0IC01MzQgMzAgLTMxIGMyNSAtMjQgNDAgLTMxIDcyIC0zMSAzNQowIDQ2IDYgNzYgMzkgbDM2IDM5IC02IDEwMyBjLTMgNTcgLTMgMTA0IDEgMTAzIDQgMCAxNiAtNCAyNyAtOCAzMyAtMTMgNzEgNwoxMTQgNjIgMjIgMjkgOTEgMTE3IDE1MyAxOTYgNjIgNzggMTQwIDE3OCAxNzMgMjIwIDMzIDQzIDkzIDExOCAxMzMgMTY3IDkwCjExMSAxNTUgMjM5IDE4MiAzNTkgMzIgMTQ1IDI0IDIzNSAtMjUgMjk0IC0yNiAzMSAtMTEwIDc1IC0xMjUgNjYgLTUgLTMgLTExCi0xIC0xNSA1IC04IDEzIC03MiAxMyAtODAgMCAtNCAtNiAtMTUgLTggLTI2IC01IC0yNCA4IC0xNzAgLTE0IC0xODYgLTI3IC05Ci03IC0xMyAtNyAtMTMgMCAwIDYgMzUgNTMgNzggMTA0IDE0MyAxNzMgMjExIDI4MSAyNTYgNDA2IDI4IDgwIDMyIDEyMSAxNQoxNzMgLTE1IDQzIC03NCAxMDcgLTExNiAxMjUgLTMxIDEzIC0xODAgMTggLTIyOCA3eiBtMTgxIC0xNTQgYzM4IC0zMSAtMTYKLTE3OCAtMTE2IC0zMTkgLTI5IC00MSAtMTAxIC0xMzMgLTE1OSAtMjA0IC0yMTAgLTI1NiAtMjMwIC0yODQgLTIxNCAtMzA5IDQKLTcgOCAtMTkgOCAtMjcgMCAtOCAxNSAtMjMgMzQgLTMyIDMxIC0xNiAzNyAtMTYgNzAgLTEgMTEwIDQ4IDE1NSA2MyAyMzYgNzkKNTAgOSA5NyAxOSAxMDUgMjIgMTggNiAxMjcgMyAxNTMgLTQgMTAgLTMgMTcgLTE1IDE3IC0yOSAwIC0xMyA0IC0yNyAxMCAtMzAKNiAtNCA2IC0xMiAxIC0yMyAtNSAtOSAtMTQgLTQ0IC0yMCAtNzcgLTE2IC04NiAtNzcgLTIwNyAtMTUyIC0yOTkgLTM1IC00MwotMTA3IC0xMzMgLTE1OSAtMjAxIC0xODcgLTI0MCAtMjU5IC0zMzEgLTI5MiAtMzY4IGwtMzMgLTM4IC0zIDEwOCBjLTIgNTkgLTYKMTEyIC0xMCAxMTggLTQgNSAtNSA5MCAtMyAxODcgMiA5NyAwIDE4MSAtMyAxODcgLTQgNSAtOSA2MiAtMTIgMTI3IC0yIDY0IC03CjEyMSAtMTAgMTI2IC00IDUgLTUgMTE0IC01IDI0MyAxIDE1MCAtMiAyMzYgLTggMjQwIC02IDMgLTggMjQgLTUgNDggMyAyMyAxCjY3IC00IDk3IC02IDM0IC03IDYxIC0xIDcyIDEyIDIxIC0xMSA4MiAtMzYgOTUgLTE0IDggLTQgMTggNTcgNTUgNDAgMjUgOTIKNTUgMTE0IDY2IDY0IDMzIDI1MiA5MiAyODkgOTIgMTkgMCAzNiA0IDM5IDggNyAxMyA5NSA2IDExMiAtOXoiLz4KPC9nPgo8L3N2Zz4K',
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KCSB2aWV3Qm94PSIwIDAgNDg2LjExNyA0ODYuMTE3IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJYTUxJRF8xMTY0XyI+DQoJPGcgaWQ9IlhNTElEXzQwMF8iPg0KCQk8cmVjdCB4PSI3LjQxNiIgc3R5bGU9ImZpbGw6I0ExMDgzRTsiIHdpZHRoPSI0NzEuMTA1IiBoZWlnaHQ9IjQ1NS43MzQiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzU3M18iPg0KCQk8cmVjdCB4PSIzMTkuMDE0IiBzdHlsZT0iZmlsbDojRDYwQjUyOyIgd2lkdGg9IjE1OS41MDciIGhlaWdodD0iNDU1LjczNCIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfNzcwXyI+DQoJCTxyZWN0IHg9IjM3OS43NzkiIHk9IjMyNi42MDkiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iNjguMzYiIGhlaWdodD0iOTguNzQyIi8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMTYzXyI+DQoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGN4PSI0MTAuMTYxIiBjeT0iMjczLjQ0IiByPSIyMi43ODciLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzU3NF8iPg0KCQk8cmVjdCB4PSIzNy45NzgiIHk9IjM3Ljk3OCIgc3R5bGU9ImZpbGw6I0UwRDZDNjsiIHdpZHRoPSIzMDMuODIzIiBoZWlnaHQ9IjM4Ny4zNzQiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzExMDhfIj4NCgkJPHJlY3QgeD0iMTY3LjEwMyIgeT0iODMuNTUxIiBzdHlsZT0iZmlsbDojRDYwQjUyOyIgd2lkdGg9IjQ1LjU3MyIgaGVpZ2h0PSI5OC43NDIiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwOTJfIj4NCgkJPHJlY3QgeD0iMTM2LjcyIiB5PSIzNzIuMTgzIiBzdHlsZT0iZmlsbDojQ0JCQkEwOyIgd2lkdGg9IjEwNi4zMzgiIGhlaWdodD0iNTMuMTY5Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDYxXyI+DQoJCTxyZWN0IHg9IjM2NC41ODciIHk9IjMwLjQ3OCIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNS4xOTEiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjJfIj4NCgkJPHJlY3QgeD0iMzY0LjU4NyIgeT0iNjAuODYiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMTUuMTkxIiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDYzXyI+DQoJCTxyZWN0IHg9IjM2NC41ODciIHk9IjkxLjI0MyIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNS4xOTEiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjRfIj4NCgkJPHJlY3QgeD0iMzY0LjU4NyIgeT0iMTIxLjYyNSIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNS4xOTEiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjVfIj4NCgkJPHJlY3QgeD0iMzY0LjU4NyIgeT0iMTUyLjAwNiIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNS4xOTEiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjZfIj4NCgkJPHJlY3QgeD0iMzY0LjU4NyIgeT0iMTg5Ljk4NSIgc3R5bGU9ImZpbGw6IzFEMUQxQjsiIHdpZHRoPSI5MS4xNDciIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNTdfIj4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzFEMUQxQjsiIGQ9Ik00MTAuMTYxLDMwMy43MjdjLTE2LjcsMC0zMC4yODctMTMuNTg3LTMwLjI4Ny0zMC4yODdzMTMuNTg2LTMwLjI4NiwzMC4yODctMzAuMjg2DQoJCQlzMzAuMjg3LDEzLjU4NiwzMC4yODcsMzAuMjg2UzQyNi44NjEsMzAzLjcyNyw0MTAuMTYxLDMwMy43Mjd6IE00MTAuMTYxLDI1OC4xNTRjLTguNDI5LDAtMTUuMjg3LDYuODU3LTE1LjI4NywxNS4yODYNCgkJCWMwLDguNDMsNi44NTcsMTUuMjg3LDE1LjI4NywxNS4yODdzMTUuMjg3LTYuODU3LDE1LjI4Ny0xNS4yODdDNDI1LjQ0OCwyNjUuMDExLDQxOC41OSwyNTguMTU0LDQxMC4xNjEsMjU4LjE1NHoiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjhfIj4NCgkJPHJlY3QgeD0iNDAyLjY2MSIgeT0iMjIwLjI3MSIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNS4xOTEiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNjdfIj4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzFEMUQxQjsiIGQ9Ik00NTUuNjM5LDQzMi44NTJoLTkwLjk1NlYzMTkuMTFoOTAuOTU2VjQzMi44NTJ6IE0zNzkuNjgzLDQxNy44NTJoNjAuOTU2VjMzNC4xMWgtNjAuOTU2VjQxNy44NTJ6DQoJCQkiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwNzBfIj4NCgkJPHJlY3QgeD0iMzk0Ljk3IiB5PSIzNDkuNDkyIiBzdHlsZT0iZmlsbDojMUQxRDFCOyIgd2lkdGg9IjMwLjM4MiIgaGVpZ2h0PSIxNSIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfMTA3MV8iPg0KCQk8cmVjdCB4PSI0MDIuNTY2IiB5PSIzMC40NzgiIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiB3aWR0aD0iNTMuMTY5IiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDczXyI+DQoJCTxyZWN0IHg9IjQwMi41NjYiIHk9IjYwLjg2IiBzdHlsZT0iZmlsbDojMUQxRDFCOyIgd2lkdGg9IjUzLjE2OSIgaGVpZ2h0PSIxNSIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfMTA3NF8iPg0KCQk8cmVjdCB4PSI0MDIuNTY2IiB5PSI5MS4yNDMiIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiB3aWR0aD0iNTMuMTY5IiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDc1XyI+DQoJCTxyZWN0IHg9IjQwMi41NjYiIHk9IjEyMS42MjUiIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiB3aWR0aD0iNTMuMTY5IiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDc2XyI+DQoJCTxyZWN0IHg9IjQwMi41NjYiIHk9IjE1Mi4wMDYiIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiB3aWR0aD0iNTMuMTY5IiBoZWlnaHQ9IjE1Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMUQxRDFCOyIgZD0iTTAuMDk2LDAuMDk1djQ2My4xMzloNTIuMjA2djIyLjg4M2gxNXYtMjIuODgzaDM1MC42ODZ2MjIuODgzaDE1di0yMi44ODNoNTMuMDMzVjAuMDk1SDAuMDk2eg0KCQkJIE00NzEuMDIxLDQ0OC4yMzRIMTUuMDk2VjE1LjA5NWg0NTUuOTI1VjQ0OC4yMzR6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMxRDFEMUI7IiBkPSJNMzQ5LjMwMSwzMC40NzhIMzAuNDc4djQwMi4zNzRoMzE4LjgyM1YzMC40Nzh6IE0yMzUuNTU4LDQxNy44NTJIMTQ0LjIydi0zOC4xNjloOTEuMzM4VjQxNy44NTJ6DQoJCQkgTTMzNC4zMDEsNDE3Ljg1MmgtODMuNzQzdi0zOC4xNjloMTUuMjg3di0xNUgxMTMuOTM0djE1aDE1LjI4N3YzOC4xNjlINDUuNDc4VjQ1LjQ3OGgyODguODIzVjQxNy44NTJ6Ii8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xMDgwXyI+DQoJCTxyZWN0IHg9IjUzLjE2OSIgeT0iMTE0LjAyOSIgc3R5bGU9ImZpbGw6IzFEMUQxQjsiIHdpZHRoPSI5OC43NDMiIGhlaWdodD0iMTUiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzU1OV8iPg0KCQk8cmVjdCB4PSIyMjcuODY3IiB5PSIxMTQuMDI5IiBzdHlsZT0iZmlsbDojMUQxRDFCOyIgd2lkdGg9Ijk4Ljc0MiIgaGVpZ2h0PSIxNSIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfMTA2MF8iPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMUQxRDFCOyIgZD0iTTIyMC4xNzYsMTg5Ljc5NGgtNjAuNTc0Vjc2LjA1MWg2MC41NzRWMTg5Ljc5NHogTTE3NC42MDMsMTc0Ljc5NGgzMC41NzRWOTEuMDUxaC0zMC41NzRWMTc0Ljc5NHoNCgkJCSIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfMTA4M18iPg0KCQk8cG9seWdvbiBzdHlsZT0iZmlsbDojMUQxRDFCOyIgcG9pbnRzPSIyMTIuNTgxLDIyMC4xNzYgMTY3LjE5OCwyMjAuMTc2IDE2Ny4xOTgsMTk3LjQ4NSAxODIuMTk4LDE5Ny40ODUgMTgyLjE5OCwyMDUuMTc2IA0KCQkJMTk3LjU4MSwyMDUuMTc2IDE5Ny41ODEsMTk3LjQ4NSAyMTIuNTgxLDE5Ny40ODUgCQkiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzEwODRfIj4NCgkJPHJlY3QgeD0iMTgyLjM4OSIgeT0iMjEyLjY3NiIgc3R5bGU9ImZpbGw6IzFEMUQxQjsiIHdpZHRoPSIxNSIgaGVpZ2h0PSIzNy45NzgiLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzU2MF8iPg0KCQkNCgkJCTxyZWN0IHg9IjIyNi4wODMiIHk9IjIwMi44MzEiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcwNzEgLTAuNzA3MSAwLjcwNzEgLTAuNzA3MSAyMDQuMDU4OCA2MzUuMTk4MykiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMTUiIGhlaWdodD0iMTQ1LjAxMyIvPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfNTYxXyI+DQoJCQ0KCQkJPHJlY3QgeD0iMjY1Ljk1OSIgeT0iMjU5LjU1IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43MDcxIC0wLjcwNzEgMC43MDcxIC0wLjcwNzEgMjY4LjEwNDYgNjczLjExOTMpIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjE1LjAwMSIgaGVpZ2h0PSI0Mi45NjciLz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzQwMV8iPg0KCQkNCgkJCTxyZWN0IHg9IjgzLjY1OCIgeT0iMTgwLjQ1MyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAtMC43MDcxIDAuNzA3MSAtMC43MDcxIDUuMjMwMiA0MjcuNTIyMykiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iMTUiIGhlaWdodD0iNjQuNDQ5Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzMuMjUgMTczLjMzIj48cGF0aCBkPSJNODYuNjIzIDBDMzguNzgzIDAgMCAzOC44MDMgMCA4Ni42NjdjMCA0My45NDcgMzIuNjk0IDgwLjI0OCA3NS4wNzQgODUuODk4di0xNy40NjNjMC00LjkyNS0zLjEwNC05LjM1LTcuNzctMTAuOTE3LTI0LjQ1Mi04LjIxOC00MS45NDUtMzEuNjAxLTQxLjMtNTguOTguNzg0LTMzLjMzMiAyNy45MjItNTkuNTM4IDYxLjI0NC01OS4yMDIgMzMuMi4zMzYgNjAuMDEyIDI3LjM2NyA2MC4wMTIgNjAuNjY0IDAgLjc1OS0uMDE5IDEuNTE0LS4wNDcgMi4yNjVsLS4wMTguNTA3YTYzLjQ5OSA2My40OTkgMCAwMS0uMTMgMi4wODZjLS4wMTYuMjItLjAzOC40NC0uMDU4LjY2YTU2LjkxMiA1Ni45MTIgMCAwMS0uMzU1IDMuMDY3Yy0uMDMzLjI0Ni0uMDY3LjQ5My0uMTA0LjczOC03LjQyNCA0OC45MjctNzEuMTE4IDc2LjQyNi03MS40NjcgNzYuNTc3IDMuNzc3LjUwMiA3LjYyOS43NjYgMTEuNTQyLjc2NiA0Ny44NCAwIDg2LjYyNC0zOC44MDEgODYuNjI0LTg2LjY2NkMxNzMuMjQ3IDM4LjgwMyAxMzQuNDY0IDAgODYuNjIzIDAiIGZpbGw9IiM1RkNBRjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==',
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwNS45MzggNTA1LjkzOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTA1LjkzOCA1MDUuOTM4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojQTMxQTFBOyIgZD0iTTI5Ni45NjksMTMzLjE5NWMyNCw4MC0xMC40LDIwNi40LTkwLjQsMjI5LjZjLTgwLDI0LTE3Ni44LTY0LTIwMC44LTE0NHMyOS42LTE0MCwxMTAuNC0xNjMuMg0KCUMxOTYuMTY5LDMxLjU5NSwyNzIuOTY5LDUyLjM5NSwyOTYuOTY5LDEzMy4xOTV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojOEUxMzEzOyIgZD0iTTExNi4xNjksNTQuNzk1YzgwLTI0LDE1Ny42LTIuNCwxODAuOCw3Ny42YzI0LDgwLTEwLjQsMjA2LjQtOTAuNCwyMjkuNiIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0Q4OTYyMTsiIHBvaW50cz0iMjY3LjM2OSw0MzkuNTk1IDIzMy43NjksNDU1LjU5NSAxOTYuOTY5LDQ2MC4zOTUgMTc4LjU2OSwzMzAuNzk1IDE5Mi4xNjksMzE0Ljc5NSANCgkyMTIuOTY5LDMyMS4xOTUgIi8+DQo8cG9seWxpbmUgc3R5bGU9ImZpbGw6I0JDN0EwRjsiIHBvaW50cz0iMTkyLjE2OSwzMTQuNzk1IDIxMi45NjksMzIxLjE5NSAyNjcuMzY5LDQzOS41OTUgMjMzLjc2OSw0NTUuNTk1ICIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4OTYyMTsiIGQ9Ik05My43NjksMzM2LjM5NWMzNS4yLDI0LjgsNzUuMiwzNy42LDExMi44LDI2LjRjMzYuOC0xMS4yLDY0LTQzLjIsODAtODMuMkw5My43NjksMzM2LjM5NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCQzdBMEY7IiBkPSJNMjA2LjU2OSwzNjIuNzk1YzM2LjgtMTEuMiw2NC00My4yLDgwLTgzLjIiLz4NCjxyZWN0IHg9IjE3Ni4xNjUiIHk9IjMyMS4wOTkiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjk1OTQgMC4yODE5IC0wLjI4MTkgLTAuOTU5NCA0NzYuNDcxNSA1ODQuODQ2NCkiIHN0eWxlPSJmaWxsOiM4RTEzMTM7IiB3aWR0aD0iMzkuOTk4IiBoZWlnaHQ9IjExLjIiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMzg0OTE7IiBkPSJNMjA4Ljk2OSwxMzMuMTk1Yy0yNCw4MCwxMC40LDIwNi40LDkwLjQsMjI5LjZjODAsMjQsMTc2LjgtNjQsMjAwLjgtMTQ0YzI0LTgwLTI5LjYtMTQwLTExMC40LTE2My4yDQoJQzMwOS43NjksMzEuNTk1LDIzMi45NjksNTIuMzk1LDIwOC45NjksMTMzLjE5NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwQ0E2QkY7IiBkPSJNMzg5Ljc2OSw1NC43OTVjLTgwLTI0LTE1Ny42LTIuNC0xODAuOCw3Ny42Yy0yNCw4MCwxMC40LDIwNi40LDkwLjQsMjI5LjYiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCQzdBMEY7IiBwb2ludHM9IjIzOC41NjksNDM5LjU5NSAyNzIuMTY5LDQ1NS41OTUgMzA4Ljk2OSw0NjAuMzk1IDMyNy4zNjksMzMwLjc5NSAzMTMuNzY5LDMxNC43OTUgDQoJMjkyLjk2OSwzMjEuMTk1ICIvPg0KPHBvbHlsaW5lIHN0eWxlPSJmaWxsOiNEODk2MjE7IiBwb2ludHM9IjMxMy43NjksMzE0Ljc5NSAyOTIuOTY5LDMyMS4xOTUgMjM4LjU2OSw0MzkuNTk1IDI3Mi4xNjksNDU1LjU5NSAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCQzdBMEY7IiBkPSJNNDEyLjE2OSwzMzYuMzk1Yy0zNS4yLDI0LjgtNzUuMiwzNy42LTExMi44LDI2LjRjLTM2LjgtMTEuMi02NC00My4yLTgwLTgzLjJMNDEyLjE2OSwzMzYuMzk1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4OTYyMTsiIGQ9Ik0yOTkuMzY5LDM2Mi43OTVjLTM2LjgtMTEuMi02NC00My4yLTgwLTgzLjIiLz4NCjxyZWN0IHg9IjI4OS42NTYiIHk9IjMyMC44OTMiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTU5NCAwLjI4MTkgLTAuMjgxOSAwLjk1OTQgMTA0LjYwMTggLTc0LjA1MzEpIiBzdHlsZT0iZmlsbDojOEUxMzEzOyIgd2lkdGg9IjM5Ljk5OCIgaGVpZ2h0PSIxMS4yIi8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNFNkU4RTg7IiBjeD0iMjUyLjk2OSIgY3k9IjIwMi43OTUiIHI9IjU2LjgiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDM0M5Qzk7IiBkPSJNMjkyLjk2OSwxNjIuNzk1YzIyLjQsMjIuNCwyMi40LDU4LjQsMCw4MGMtMjIuNCwyMi40LTU3LjYsMjIuNC04MCwwIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSIjMTM5QkQwIiByPSI0NSIvPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUxLjQ3NCw2MC43NTRjLTEuNzMzLDEuNjg4LTMuNDUxLDMuMzQ4LTUuMTUzLDUuMDIxICAgYy0wLjU5NSwwLjU4Ni0xLjI2NCwwLjkxLTIuMTE4LDAuODY1Yy0wLjU4My0wLjAzMS0wLjkwOS0wLjI4Ny0xLjA4OC0wLjg0Yy0xLjMwNC00LjA0Ny0yLjYyNy04LjA4NC0zLjkyNC0xMi4xMzUgICBjLTAuMTI2LTAuMzkzLTAuMzEyLTAuNTg0LTAuNzEtMC43MDdjLTMuMDcyLTAuOTM4LTYuMTM4LTEuODk4LTkuMTk5LTIuODcxYy0wLjQ3MS0wLjE1LTAuOTQ2LTAuMzQ2LTEuMzUzLTAuNjIzICAgYy0wLjYyOS0wLjQyNi0wLjcyMS0xLjEyMS0wLjE1Ny0xLjYyMWMwLjUyMS0wLjQ2MSwxLjE0My0wLjg2MywxLjc4OS0xLjExOWMzLjc1NS0xLjQ4OCw3LjUzLTIuOTI4LDExLjI5OS00LjM4MSAgIGM5LjU2NS0zLjY5MywxOS4xMy03LjM4MywyOC42OTYtMTEuMDc2YzEuODE5LTAuNzAzLDMuMjE3LDAuMjg3LDMuMDI4LDIuMjU0Yy0wLjEyMSwxLjI1OC0wLjQ0NywyLjQ5Ni0wLjcxLDMuNzM4ICAgYy0yLjA3Nyw5LjgwNy00LjE1NiwxOS42MTUtNi4yNDQsMjkuNDJjLTAuNDk2LDIuMzI4LTIuMTMxLDIuOTM2LTQuMDQ3LDEuNTIzYy0zLjIwOS0yLjM2NS02LjQxNS00LjczOC05LjYyMi03LjEwNyAgIEM1MS44MDgsNjAuOTg0LDUxLjY0OSw2MC44NzcsNTEuNDc0LDYwLjc1NHogTTQ0LjI3MSw2My43MzJjMC4wMzYtMC4wMSwwLjA3Mi0wLjAyLDAuMTA4LTAuMDI5ICAgYzAuMDItMC4wOTIsMC4wNDktMC4xODIsMC4wNTctMC4yNzNjMC4yMDYtMi4yMjMsMC40MjQtNC40NDUsMC42MDMtNi42NzJjMC4wNC0wLjQ5NiwwLjIxLTAuODQ4LDAuNTgzLTEuMTgyICAgYzIuOTU4LTIuNjQ1LDUuODk4LTUuMzA3LDguODQ0LTcuOTYzYzMuMjYxLTIuOTQxLDYuNTIzLTUuODc5LDkuNzcyLTguODMyYzAuMjAxLTAuMTgyLDAuMjg1LTAuNDkyLDAuNDIzLTAuNzQ0ICAgYy0wLjMwNi0wLjAzMy0wLjYzNC0wLjE1Ni0wLjkxMi0wLjA4NGMtMC4zNzksMC4wOTgtMC43MzgsMC4zMTgtMS4wNzYsMC41MzFjLTcuMTk3LDQuNTMzLTE0LjM4OCw5LjA3NC0yMS41OSwxMy41OTggICBjLTAuNDA3LDAuMjU2LTAuNDgzLDAuNDczLTAuMzI4LDAuOTJjMC41MzEsMS41MjUsMS4wMTQsMy4wNjQsMS41MTUsNC42QzQyLjkzNyw1OS42NDYsNDMuNjA0LDYxLjY4OSw0NC4yNzEsNjMuNzMyeiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvc3ZnPg==',
        ],
        u = [t.CAREER_EXPERIENCE, t.ACHIEVEMENTS, t.PROJECTS],
        z = C.map(function (e, M) {
          return y(y({}, e), {}, { icon: A[M] });
        }),
        x = i(5893);
      function w(e, M) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, M) {
            var i =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != i) {
              var t,
                I,
                g = [],
                N = !0,
                n = !1;
              try {
                for (
                  i = i.call(e);
                  !(N = (t = i.next()).done) &&
                  (g.push(t.value), !M || g.length !== M);
                  N = !0
                );
              } catch (e) {
                (n = !0), (I = e);
              } finally {
                try {
                  N || null == i.return || i.return();
                } finally {
                  if (n) throw I;
                }
              }
              return g;
            }
          })(e, M) ||
          (function (e, M) {
            if (e) {
              if ('string' == typeof e) return d(e, M);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === i && e.constructor && (i = e.constructor.name),
                'Map' === i || 'Set' === i
                  ? Array.from(e)
                  : 'Arguments' === i ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                  ? d(e, M)
                  : void 0
              );
            }
          })(e, M) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function d(e, M) {
        (null == M || M > e.length) && (M = e.length);
        for (var i = 0, t = new Array(M); i < M; i++) t[i] = e[i];
        return t;
      }
      var E = (0, g.forwardRef)(function (e, M) {
        var i = w((0, g.useState)(80), 2),
          t = i[0],
          I = i[1],
          o = w((0, g.useState)(80), 2),
          a = o[0],
          r = o[1];
        function j() {
          window.innerWidth >= 992 ? (I(100), r(100)) : (I(80), r(80));
        }
        return (
          (0, g.useEffect)(function () {
            return (
              j(),
              window.addEventListener('resize', j),
              function () {
                return window.removeEventListener('resize', j);
              }
            );
          }, []),
          (0, x.jsxs)(N.Z, {
            ref: M,
            children: [
              (0, x.jsx)(D.Z, { title: 'Projects', isHiddenOnPhone: !0 }),
              (0, x.jsx)(n.Z, {
                className: 'justify-content-end pt-2',
                children: (0, x.jsxs)(T.Z, {
                  className: 'd-flex flex-column justify-content-center',
                  children: [
                    (0, x.jsx)('h2', { children: 'A Short Write-Up.' }),
                    (0, x.jsx)('hr', { className: 'mt-0 mb-2' }),
                    (0, x.jsx)('p', {
                      children:
                        "I've always been interested in electronic projects from a young age, and programming projects extend nicely from there. I'm always keen to try out new technologies, and see what I can build from them. Every technical project involves problem solving - which I enjoy. As a person with interests in many things technology, I have a varied array of projects under my belt - not just limited to software development. So here's just a collection of projects I would like to share.",
                    }),
                  ],
                }),
              }),
              (0, x.jsx)(n.Z, {
                className: '',
                children: z.map(function (e) {
                  return (0, x.jsx)(
                    T.Z,
                    {
                      className: 'd-flex g-3 col-12 col-lg-6',
                      children: (0, x.jsxs)(s.Z, {
                        className: 'w-100',
                        children: [
                          (0, x.jsx)(s.Z.Header, {
                            className: 'project-card-header-background',
                            children: (0, x.jsx)(N.Z, {
                              fluid: !0,
                              className: 'p-0',
                              children: (0, x.jsxs)(n.Z, {
                                children: [
                                  (0, x.jsx)(T.Z, {
                                    className: 'p-2',
                                    children: (0, x.jsx)(c.Z, {
                                      iconSvg: e.icon,
                                      height: t,
                                      width: a,
                                      altText: ''.concat(e),
                                    }),
                                  }),
                                  (0, x.jsx)(T.Z, {
                                    className:
                                      'd-flex align-items-center justify-content-center',
                                    children: (0, x.jsx)('h3', {
                                      className: 'fw-bold',
                                      children: e.title,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, x.jsxs)(s.Z.Body, {
                            children: [
                              (0, x.jsx)(s.Z.Title, {
                                className: 'fw-bold mb-3',
                                children: e.subtitle,
                              }),
                              (0, x.jsx)('ul', {
                                className: 'text-start',
                                children: e.summary.map(function (e) {
                                  return (0, x.jsx)('li', { children: e }, e);
                                }),
                              }),
                              (0, x.jsx)('h5', { children: 'Description' }),
                              (0, x.jsx)(N.Z, {
                                className: 'w-25',
                                children: (0, x.jsx)('hr', {
                                  className:
                                    'projects-description-header-linebreak',
                                }),
                              }),
                              (0, x.jsx)(s.Z.Text, {
                                className: 'text-start',
                                style: { whiteSpace: 'pre-wrap' },
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.title
                  );
                }),
              }),
            ],
          })
        );
      });
      E.displayName = 'ProjectsSubpage';
      var m = E,
        S = i(172),
        O = JSON.parse(
          '["Dean\'s List 2021/2022 Semester 2, National University of Singapore, School of Computing","Dean\'s List 2021/2022 Semester 1, National University of Singapore, School of Computing","4 Distinctions at GCE A-Levels","8 Distinctions at GCE O-Levels","Televised National Science Challenge 2014 Quarter-finalist"]'
        ),
        Q = (0, g.forwardRef)(function (e, M) {
          return (0, x.jsxs)(N.Z, {
            ref: M,
            children: [
              (0, x.jsx)(D.Z, { title: 'Achievements' }),
              (0, x.jsx)(N.Z, {
                children: (0, x.jsx)(n.Z, {
                  children: (0, x.jsx)(T.Z, {
                    children: (0, x.jsx)('ul', {
                      className: 'achievements-list',
                      children: O.map(function (e) {
                        return (0, x.jsx)('li', { children: e }, e);
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        });
      Q.displayName = 'AchievementSubPage';
      var h = Q;
      function p(e, M) {
        (null == M || M > e.length) && (M = e.length);
        for (var i = 0, t = new Array(M); i < M; i++) t[i] = e[i];
        return t;
      }
      var k = JSON.parse(
          '[{"Title":"Tutor","Company":"Self-Employed","Duration":"Dec 2017 - Present","Summary":["Started providing Secondary School English, Sciences and Humanities subjects from 2017","Currently providing private computing tuition for both University courses and Pre- University Computer Science"]},{"Title":"Software Engineer Intern","Company":"Singapore E-Business Pte. Ltd.","Duration":"May 2021 - Jul 2021","Summary":["Learnt to develop process flows for conceptualising implementation of payment services such as cross border payments","Developed backend for direct debit authorization service, utilizing Spring Boot framework in Java to implement RESTful API, with Hibernate ORM to interact with MySql supporting database","Played a key role in the development process, including testing and debugging, reviewing and approving code written by junior developer, providing guidance as needed"]},{"Title":"Software Engineer Intern","Company":"Shopee Pte. Ltd.","Duration":"May 2022 - Present","Summary":["Frontend Software Developer in Paid Ads team","Programmed primarily in Typescript","Libraries used in development: React, Vue.js","Gained experienced in manually configuring code bundler (Webpack) to set up critical features like transpiling typescript, code-splitting, uglification etc"]}]'
        ).reverse(),
        b = (0, g.forwardRef)(function (e, M) {
          var i,
            t,
            I =
              ((i = (0, g.useState)(window.innerWidth)),
              (t = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(i) ||
                (function (e, M) {
                  var i =
                    null == e
                      ? null
                      : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                        e['@@iterator'];
                  if (null != i) {
                    var t,
                      I,
                      g = [],
                      N = !0,
                      n = !1;
                    try {
                      for (
                        i = i.call(e);
                        !(N = (t = i.next()).done) &&
                        (g.push(t.value), !M || g.length !== M);
                        N = !0
                      );
                    } catch (e) {
                      (n = !0), (I = e);
                    } finally {
                      try {
                        N || null == i.return || i.return();
                      } finally {
                        if (n) throw I;
                      }
                    }
                    return g;
                  }
                })(i, t) ||
                (function (e, M) {
                  if (e) {
                    if ('string' == typeof e) return p(e, M);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      'Object' === i &&
                        e.constructor &&
                        (i = e.constructor.name),
                      'Map' === i || 'Set' === i
                        ? Array.from(e)
                        : 'Arguments' === i ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                        ? p(e, M)
                        : void 0
                    );
                  }
                })(i, t) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()),
            o = (I[0], I[1]);
          function a() {
            o(window.innerWidth);
          }
          return (
            (0, g.useEffect)(function () {
              window.addEventListener('resize', a);
            }),
            (0, x.jsxs)(N.Z, {
              ref: M,
              children: [
                (0, x.jsx)(D.Z, { title: 'Career Experience' }),
                k.map(function (e) {
                  return (0, x.jsxs)(
                    N.Z,
                    {
                      children: [
                        (0, x.jsxs)(n.Z, {
                          className: 'gx-2 justify-content-between',
                          children: [
                            (0, x.jsx)(T.Z, {
                              className: 'col-12 col-md-8 d-flex',
                              children: (0, x.jsx)('h5', {
                                className: 'fw-bold',
                                children: e.Title + ', ' + e.Company,
                              }),
                            }),
                            (0, x.jsx)(T.Z, {
                              className: 'col-auto',
                              children: (0, x.jsx)('h6', {
                                children: e.Duration,
                              }),
                            }),
                          ],
                        }),
                        (0, x.jsx)(n.Z, {
                          children: (0, x.jsx)(T.Z, {
                            children: (0, x.jsx)('ul', {
                              className: 'career-summary-list',
                              children: e.Summary.map(function (e) {
                                return (0, x.jsx)('li', { children: e }, e);
                              }),
                            }),
                          }),
                        }),
                      ],
                    },
                    e.Company
                  );
                }),
              ],
            })
          );
        });
      b.displayName = 'CareerExperienceSubpage';
      var U = b,
        P = i(267),
        Z = S.K.G,
        Y = S.K.R;
      function f(e) {
        var M = e.mainNavbarRef,
          i = (0, j.Z)(u),
          s = (0, g.useRef)(null);
        return (
          (0, r.Z)(s, M, i),
          (0, x.jsxs)(N.Z, {
            fluid: !0,
            className: 'h-100 p-0 knowledge',
            children: [
              (0, x.jsx)(a.Z, {
                mainNavbarRef: M,
                subNavbarRef: s,
                subPageRefs: i.current,
              }),
              (0, x.jsx)(P.Z, {
                backgroundImage: I,
                children: (0, x.jsx)(N.Z, {
                  children: (0, x.jsx)(n.Z, {
                    className: 'justify-content-center',
                    children: (0, x.jsx)(T.Z, {
                      className: 'col-md-6',
                      children: (0, x.jsx)(o.C, {
                        quoteText: Z,
                        quoteOrigin: Y,
                        variant: o.Z.DARK,
                      }),
                    }),
                  }),
                }),
              }),
              (0, x.jsx)(U, { ref: i.current.get(t.CAREER_EXPERIENCE) }),
              (0, x.jsx)(h, { ref: i.current.get(t.ACHIEVEMENTS) }),
              (0, x.jsx)(m, { ref: i.current.get(t.PROJECTS) }),
            ],
          })
        );
      }
    },
  },
]);
