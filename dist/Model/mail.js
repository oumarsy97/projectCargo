// import nodemailer from 'nodemailer';
// import twilio from 'twilio';
// async function envoyerEmail(destination: string, name: string, url: string) {
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: 'syoumar505@gmail.com',
//         pass: 'ppia ibfs kadu ueic',
//       },
//     });
export {};
//     const mailOptions = {
//       from: 'syoumar505@gmail.com',
//       to: destination,
//       subject: 'Mail de connexion',
//       text: `Bonjour merci d'utiliser ce lien pour accéder à votre compte : ${url} votre login est : ${destination} le mot de passe par défaut est : passer`,
//     };
//     try {
//       await transporter.sendMail(mailOptions);
//       console.log('E-mail envoyé avec succès !');
//     } catch (error) {
//       console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
//     }
//   }
//   function envoieSms(destinataire: string) {
//     const accountSid = 'AC7a65fc0d490353e55ede7d1a3edafacd';
//     const authToken = 'ac058d278d49b30b87cde3e4c7e75542';
//     const client = twilio(accountSid, authToken);
//     const from = '+12566158460';
//     const to = `+221${destinataire}`;
//     client.messages
//       .create({
//         body: 'Bonjour ! Ceci est un message de test Twilio.',
//         from: from,
//         to: to,
//       })
//       .then((message) => {
//         console.log('Message envoyé avec succès ! SID du message :', message.sid);
//       })
//       .catch((error) => {
//         console.error('Erreur lors de l\'envoi du SMS :', error);
//       });
//   }
// //   // Exemple d'utilisation
// // envoyerEmail('destinataire@exemple.com', 'John Doe', 'https://exemple.com/login')
// // .catch((error) => {
// //   console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
// // });
// // import axios from 'axios';
// // async function envoieSmsTextBelt(destinataire: string, message: string) {
// //   const url = 'https://textbelt.com/text';
// //   const data = {
// //     phone: destinataire,
// //     message: message,
// //     key: 'bf26a176efe608db8a32e7267611d115791232f6OMOkV78m0ZxSIIZN3oPHRvoMK',
// //   };
// //   try {
// //     const response = await axios.post(url, data);
// //     console.log('SMS envoyé avec succès :', response.data);
// //   } catch (error) {
// //     console.error('Erreur lors de l\'envoi du SMS :', error);
// //   }
// // }
// // // Exemple d'utilisation
// // envoieSmsTextBelt('+221771807229', 'Bonjour ! Ceci est un message de test TextBelt.')
// //   .catch((error) => {
// //     console.error('Erreur lors de l\'envoi du SMS :', error);
// //   });
// import emailjs from '@emailjs/browser';
// const serviceId = 'YOUR_SERVICE_ID';
// const templateId = 'YOUR_TEMPLATE_ID';
// const templateParams = {
//   name: 'John Doe',
//   notes: 'Check this out!',
// };
// emailjs.send(serviceId, templateId, templateParams).then(
//   (response) => {
//     console.log('E-mail envoyé avec succès !', response.status, response.text);
//   },
//   (error) => {
//     console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
//   },
// );
