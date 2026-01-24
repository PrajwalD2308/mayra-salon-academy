export const getWhatsAppLink = ({
  serviceName,
  price,
}: {
  serviceName: string;
  price?: string;
}) => {
  const phone = "919168880068";

  const message = `
Hello Mayra Unisex Salon ✨

I’m interested in your *${serviceName}* service.

💰 Price: ${price ?? "Please share"}
📍 Location: Amravati

Please share more details and available slots.
Thank you!
  `;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

// FLoating Whatapp auto mssge

export const getGeneralWhatsAppLink = () => {
  const phone = "919923603601";

  const message = `
Hello Mayra Unisex Salon ✨

I would like to know more about your salon services.

📍 Location: Amravati
⏰ Preferred Time: Please suggest

Looking forward to your response 😊
  `;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

//trainig WhatsApp auto message

export const getTrainingWhatsAppLink = (courseName?: string) => {
  const phone = "919168880068";

  const message = `
Hello Mayra Unisex Salon Academy 🎓✨

I am interested in your ${courseName ?? "professional beauty training courses"}.

📍 Location: Amravati
📚 Course Type: ${courseName ?? "Please suggest"}
🎯 Goal: Career / Skill Upgrade

Kindly share course details, duration, fees, and next batch start date.

Thank you 😊
  `;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const getOfferWhatsAppLink = (courseName?: string) => {
  const phone = "919168880068";

  const message = `
Hello Mayra Unisex Salon Academy 👋

I am interested in enrolling for your professional training program under the *₹5,000 OFF limited-time offer*.

Kindly guide me with:
• Course structure  
• Fees & certification  
• Batch availability  

Thank you.
😊
  `;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
