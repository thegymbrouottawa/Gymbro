import emailjs from "emailjs-com";

// Initialize Email.js with your user ID
const initEmailJs = () => {
  emailjs.init("KA5TQAZJ1PdtNuwIr");
};

// Function to send Personal Trainer application
export const sendPersonalTrainerApplication = async (
  formData: Record<string, any>
) => {
  try {
    const result = await emailjs.send(
      "service_4u1ygz6", // Replace with your Email.js service ID
      "template_mcwpyo5", // Replace with your Email.js template ID for personal trainer
      {
        fullName: formData.fullName,
        studentNumber: formData.studentNumber,
        email: formData.email,
        preferredTrainer: formData.preferredTrainer,
        // Add any additional fields needed for your template
      }
    );
    return { success: true, result };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};

// Function to send Matchmaker application
export const sendMatchmakerApplication = async (
  formData: Record<string, any>
) => {
  try {
    // Create an array of selected goals
    const selectedGoals = Object.keys(formData.goals || {});

    // Create an array of selected days
    const selectedDays = Object.keys(formData.days || {});

    // Create an array of selected gyms
    const selectedGyms = Object.keys(formData.gymOptions || {});

    const result = await emailjs.send(
      "service_4u1ygz6", // Email.js service ID
      "template_1pjwq8v", // Email.js template ID for matchmaker
      {
        fullName: formData.fullName,
        studentNumber: formData.studentNumber,
        email: formData.email,
        yearOfStudy: formData.yearOfStudy,
        instagram: formData.instagram,
        facebook: formData.facebook,
        gender: formData.gender,
        preferredGender: formData.preferredGender,
        goals: selectedGoals.join(", "),
        days: selectedDays.join(", "),
        gyms: selectedGyms.join(", "),
        comments: formData.comments,
        // Add any additional fields needed for your template
      }
    );
    return { success: true, result };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};

// Call init function when file is imported
initEmailJs();

export default {
  sendPersonalTrainerApplication,
  sendMatchmakerApplication,
};
