import axios from "axios";

export const sendMail = async (data: ISendEmail) => {
    await test();
    //
    // let sendData = {
    //     service_id: 'service_dh5y239',
    //     template_id: 'template_zjzd0bs',
    //     user_id: 'user_e47VvS6rlIpJzNZ8qU8OB',
    //     template_params: data
    // };
    //
    // await axios({
    //     url: `https://api.emailjs.com/api/v1.0/email/send`,
    //     method: 'POST',
    //     data: sendData,
    // });
};

interface ISendEmail {
    name: string;
    email: string;
    subject: string;
    textMessage: string;
}

const test = () => new Promise(resolve => setTimeout(resolve, 5000));