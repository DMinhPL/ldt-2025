export const languages = {
  en: 'English',
  'vi-VN': 'Vietnamese',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    general: {
      submitYourRequest: "Submit your request",
      yourName: "Your Name",
      companyName: "Company Name",
      emailAddress: "Email address",
      phoneNumber: "Phone number",
      projectDetail: "Project Detail",
      budget: "Budget",
      source: "Source",
      submit: "Submit",
      hotline: "Hotline",
      office: "Office",
      links: "Links",
      overview: "Overview",
      getStarted: "Get Started",
      followUsMedia: "Follow us on social media",
      contactUs: "Contact us",
      getInTouch: "Let’s get in touch",
      howMuchHasBeenBudgetedForThisProject:
        "How much has been budgeted for this project?",
      howDidYouHearAboutUs: "How did you hear about us?",
      viewMoreCaseStudies: "View more Case studies",
      contactDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,",
    },
    menu: {
      home: "Home",
      chatAi: "Agentic AI",
      caseStudies: "Case Studies",
      aboutUs: "About Us",
      contact: "Contact",
    },
    validation: {
      nameRequired: "Name is required.",
      companyRequired: "Company name is required.",
      emailRequired: "Email address is required.",
      emailInvalid: "Please enter a valid email address.",
      phoneRequired: "Phone number is required.",
      budgetRequired: "Please select your budget.",
      sourceRequired: "Please let us know how you found us."
    }
  },

  'vi-VN': {
    general: {
      submitYourRequest: "Gửi yêu cầu",
      yourName: "Tên của bạn",
      companyName: "Tên công ty",
      emailAddress: "Địa chỉ email",
      phoneNumber: "Số điện thoại",
      projectDetail: "Chi tiết dự án",
      budget: "Ngân sách",
      source: "Nguồn",
      submit: "Gửi",
      hotline: "Hotline",
      office: "Văn phòng",
      links: "Liên kết",
      overview: "Tổng quan",
      getStarted: "Bắt đầu ngay",
      followUsMedia: "Theo dõi chúng tôi",
      contactUs: "Liên hệ với chúng tôi",
      getInTouch: "Kết nối với chúng tôi",
      howMuchHasBeenBudgetedForThisProject: "Số tiền phân bổ cho dự án này?",
      howDidYouHearAboutUs: "Từ đâu bạn biết đến chúng tôi?",
      viewMoreCaseStudies: "Xem thêm các dự án tiêu biểu",
      contactDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,",
    },
    menu: {
      home: "Trang Chủ",
      chatAi: "Agentic AI",
      caseStudies: "Dự Án Tiêu Biểu",
      aboutUs: "Giới Thiệu",
      contact: "Liên Hệ",
    },
    validation: {
      nameRequired: "Vui lòng nhập họ và tên.",
      companyRequired: "Vui lòng nhập tên công ty.",
      emailRequired: "Vui lòng nhập địa chỉ email.",
      emailInvalid: "Vui lòng nhập địa chỉ email hợp lệ.",
      phoneRequired: "Vui lòng nhập số điện thoại.",
      budgetRequired: "Vui lòng chọn ngân sách.",
      sourceRequired: "Vui lòng cho chúng tôi biết bạn biết đến chúng tôi qua đâu."
    }
  },
} as const;

export const routes = {
  en: {
    'about': 'about',
    'agentic-ai': 'agentic-ai',
    'case-studies': 'case-studies',
    'chat-ai': 'chat-ai',
    'contact': 'contact',
  },
  'vi-VN': {
    'about': 've-chung-toi',
    'agentic-ai': 'agentic-ai',
    'case-studies': 'du-an-tieu-bieu',
    'chat-ai': 'chat-ai',
    'contact': 'lien-he',
  },
}

export const showDefaultLang = false;
