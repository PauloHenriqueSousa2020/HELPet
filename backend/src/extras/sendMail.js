// PARA INSTALAR O NODE MAILER USAR  --->      npm install nodemailer --save      <---
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const codigo = crypto.randomBytes(4).toString('HEX').toUpperCase();

const texto = `PARA VALIDAÇÃO DO CADASTRO NO SISTEMA DE CONTRACHEQUES 
ONLINE INSIRA O CÓDIGO ABAIXO NO CAMPO DE CONFIRMAÇÃO ${codigo}`
const html = `<h2><center>PARA VALIDAÇÃO DO CADASTRO NO SISTEMA DE CONTRACHEQUES ONLINE 
INSIRA O CÓDIGO ABAIXO NO CAMPO DE CONFIRMAÇÃO</center></h2> <br/><br/><br/> 
<h1><center>${codigo}</center></h1>`

module.exports = {
  enviarEmail(destinatario) {
    //CONFIGURANDO O TRANSPORTE DE ENVIO
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "phsspesquisas@gmail.com", // ACESSANDO O EMAIL DO REMETENTE
        pass: "21720131" // ACESSANDO  A SENHA DO EMAIL DO REMETENTE
      }
    });
    //CONFIGURANDO O ENVIO PARA O DESTINATARIO
    const mailOptions = {
      from: "phsspesquisas@gmail.com", // ACESSANDO O EMAIL DO REMETENTE
      to: destinatario, // INFORMANDO O E-MAIL DO DESTINATÁRIO
      subject: 'Enviando um email pelo Node.js', // TÍTULO DO E-MAIL
      text: texto, // CONTEÚDO DA MENSAGEM
      html: html
    };
    //CONFIGURANDO A MENSAGEM DE ERRO OU DE ENVIO
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error); //MOSTRA QUAL O ERRO 
      } else {
        console.log('Email enviado com sucesso! ' + info.response); //MOSTRA QUE FOI ENVIADO
      }
    });
    /*
    Para usar uma conta do Gmail, tem que desativar na configuração no Gmail, 
    para aceitar App menos seguros.
    https://myaccount.google.com/intro/security?hl=pt-BR
    */
  }
}

