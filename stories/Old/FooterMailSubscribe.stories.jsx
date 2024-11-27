import MailSubscribeComp from "@/src/components/__old__/footer/mail_subscribe";

export default {
  title: "Old/MailSubscribeComp",
  component: MailSubscribeComp,
  tags: ["autodocs"],
  parameters: {
    // You might need to adjust this depending on how you want to display the component
    layout: "centered",
  },
};

export const Default = {};

export const WithMockedSubscription = {
  parameters: {
    mockData: [
      {
        url: "/api/subscribe", // Adjust this to match your actual API endpoint
        method: "POST",
        status: 200,
        response: {
          message: "Subscription successful",
        },
      },
    ],
  },
};

export const WithErrorState = {
  parameters: {
    mockData: [
      {
        url: "/api/subscribe", // Adjust this to match your actual API endpoint
        method: "POST",
        status: 400,
        response: {
          error: "Subscription failed",
        },
      },
    ],
  },
};
