// import React, { useEffect, useState } from "react";

// // Data for all categories
// const categories = {
//   entry: {
//     label: "विधानसभा भवन",
//     thumbnail: "src/assets/tours/vidhan-1.JPG.JPG",
//     images: [
//       { src: "src/assets/tours/vidhan-1.JPG.JPG", title: "मुख्य प्रवेश द्वार", description: "यह विधानसभा भवन का प्रमुख प्रवेश द्वार है।", updated: "3 मिनट पहले" },
//       { src: "src/assets/tours/vidhan-2.JPG.JPG", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
//       { src: "src/assets/tours/vidhan-3.JPG.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
//       { src: "src/assets/tours/vidhan-4.JPG.JPG", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
//       { src: "src/assets/tours/vidhan-5.JPG.JPG", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
//       { src: "src/assets/tours/vidhan-6.JPG.JPG", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
//       { src: "src/assets/tours/vidhan-7.JPG.JPG", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
//       { src: "src/assets/tours/vidhan-8.JPG.JPG", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
//       { src: "src/assets/tours/vidhan-9.JPG.JPG", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
//       { src: "src/assets/tours/vidhan-10.jpg.JPG", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
//     ],
//   },
//   hall: {
//     label: "सभागार",
//     thumbnail: "src/assets/tours/sabhaghar-7.JPG.JPG",
//     images: [
//       { src: "src/assets/tours/sabhaghar-1.jpg.jpg", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
//       { src: "src/assets/tours/sabhaghar-2.JPG.JPG", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
//       { src: "src/assets/tours/sabhaghar-3.JPG.JPG", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
//       { src: "src/assets/tours/sabhaghar-4.JPG.JPG", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
//       { src: "src/assets/tours/sabhaghar-5.JPG.JPG", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
//       { src: "src/assets/tours/sabhaghar-6.JPG.JPG", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
//       { src: "src/assets/tours/sabhaghar-7.JPG.JPG", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
//     ],
//   },
//   night: {
//     label: "रात्रि दृश्य",
//     thumbnail: "src/assets/tours/night.JPG",
//     images: [
//       { src: "src/assets/tours/DSC_0079.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//       { src: "src/assets/tours/DSC_0086.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//       { src: "src/assets/tours/DSC_0087.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//       { src: "src/assets/tours/DSC_0088.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//       { src: "src/assets/tours/DSC_0089.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//       { src: "src/assets/tours/DSC_0090.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//       { src: "src/assets/tours/DSC_0091.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//       { src: "src/assets/tours/DSC_0090.jpg.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//       { src: "src/assets/tours/DSC_0091.jpg.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//       { src: "src/assets/tours/DSC_0092.jpg.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
//     ],
//   },
//   nationalemblem: {
//     label: "राष्ट्रीय प्रतीक",
//     thumbnail: "src/assets/tours/nationalemblem-1.JPG.JPG",
//     images: [
//       { src: "src/assets/tours/nationalemblem-1.JPG.JPG", title: "विधानसभा बगीचा", description: "राष्ट्रीय प्रतीक किसी देश की पहचान, संस्कृति, इतिहास और गौरव का प्रतिनिधित्व करते हैं। ये नागरिकों में एकता और गर्व की भावना जगाते हैं।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/nationalemblem-2.JPG.JPG", title: "विधानसभा बगीचा", description: "भारत का राष्ट्रीय चिह्न सिंह स्तंभ है, जो सारनाथ में अशोक स्तंभ से लिया गया है। इसमें चार शेर हैं, जिनमें केवल तीन दिखाई देते हैं। नीचे अशोक चक्र और एक हाथी, घोड़ा, बैल और सिंह की आकृतियाँ हैं।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/nationalemblem-3.JPG.JPG", title: "विधानसभा बगीचा", description: "तिरंगा भारत का राष्ट्रीय ध्वज है, जिसमें तीन रंग होते हैं – केसरिया (त्याग), सफेद (सत्य), और हरा (समृद्धि)। मध्य में 24 तीलियों वाला अशोक चक्र है।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/nationalemblem-4.JPG.JPG", title: "विधानसभा बगीचा", description: "जन गण मन भारत का राष्ट्रीय गान है, जिसे रविंद्रनाथ टैगोर ने लिखा था। यह देश की एकता और विविधता का प्रतिनिधित्व करता है।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/nationalemblem-5.JPG.JPG", title: "विधानसभा बगीचा", description: "वंदे मातरम् भारत का राष्ट्रीय गीत है, जिसे बंकिम चंद्र चट्टोपाध्याय ने संस्कृत में लिखा था। यह भारत माता की स्तुति करता है।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/nationalemblem-6.JPG.JPG", title: "विधानसभा बगीचा", description: "बाघ भारत का राष्ट्रीय पशु है। यह शक्ति, साहस और गौरव का प्रतीक है।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/nationalemblem-7.JPG.JPG", title: "विधानसभा बगीचा", description: "मोर भारत का राष्ट्रीय पक्षी है। यह सुंदरता, संस्कृति और सौंदर्य का प्रतीक है।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/nationalemblem-8.JPG.JPG", title: "विधानसभा बगीचा", description: " ", updated: "30 मिनट पहले" },


//     ],
//   },

//   library: {
//     label: "पुस्तकालय",
//     thumbnail: "src/assets/tours/पुस्तकालय-14.JPG.JPG",
//     images: [
//       { src: "src/assets/tours/पुस्तकालय-1.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-2.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-3.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-4.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-5.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-6.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-7.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-8.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-9.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-10.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-11.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-12.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-13.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-14.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//       { src: "src/assets/tours/पुस्तकालय-15.JPG.JPG", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
//     ],
//   },
//   House: {
//     label: "हाउस",
//     thumbnail: "src/assets/tours/House-1.JPG.JPG",
//     images: [
//       { src: "src/assets/tours/House-1.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/House-2.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/House-3.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/House-4.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
//       { src: "src/assets/tours/House-5.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
//        { src: "src/assets/tours/House-6.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-7.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-8.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-9.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-10.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-11.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-12.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-13.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-14.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-15.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-16.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-17.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-18.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-19.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-20.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-21.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-22.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-23.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-24.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-25.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-26.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-27.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-28.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-29.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-30.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
//        { src: "src/assets/tours/House-131.JPG.JPG", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
      
//     ],
//   },
//   gallery: {
//     label: "प्रदर्शनी",
//     thumbnail: "src/assets/tours/प्रदर्शनी1.jpg",
//     images: [
//       { src: "src/assets/tours/प्रदर्शनी1.jpg", title: "प्रदर्शनी क्षेत्र", description: "स्मृति चिह्न और ऐतिहासिक दस्तावेज़।", updated: "20 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी2.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी3.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी4.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी5.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी6.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी7.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी8.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी9.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी10.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी11.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी12.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी13.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी14.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी15.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी16.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी17.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी18.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी20.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी21.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी22.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी23.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी24.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी26.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
//       { src: "src/assets/tours/प्रदर्शनी27.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },


//     ],
//   },

 
// };

// const VidhansabhaCategoryCarousel = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);

//   const openCategoryModal = (categoryKey) => {
//     setActiveCategory(categoryKey);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setActiveCategory(null);
//   };

//   const images = activeCategory ? categories[activeCategory].images : [];

//   return (
    
//     <>
//      {/* ✅ Main Heading */}
//     <div className="my-4 text-center">
//       <h2 className="fw-bold text-primary">विधानसभा भ्रमण</h2>
//       <p className="text-muted">विधानसभा परिसर की श्रेणियाँ देखें</p>
//     </div>
//       {/* ✅ Category Thumbnails */}
//       <div className="container py-4">
//         <div className="row justify-content-center g-4">
//           {Object.entries(categories).map(([key, value]) => (
//             <div key={key} className="text-center col-6 col-md-4">
//               <img
//                 src={value.thumbnail}
//                 alt={value.label}
//                 className="rounded shadow-sm img-fluid"
//                 style={{ maxWidth: "280px", cursor: "pointer" }}
//                 onClick={() => openCategoryModal(key)}
//               />
//               <p className="mt-2 text-primary fw-bold">{value.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ React Controlled Modal */}
//       {showModal && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           role="dialog"
//           style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
//         >
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="text-white modal-content bg-dark">
//               <div className="border-0 modal-header">
//                 <h5 className="modal-title">
//                   {activeCategory ? categories[activeCategory].label : ""}
//                 </h5>
//                 <button
//                   type="button"
//                   className="btn-close btn-close-white"
//                   onClick={closeModal}
//                 ></button>
//               </div>

//               <div className="p-0 modal-body">
//                 <div
//                   id="carouselInsideModal"
//                   className="carousel slide"
//                   data-bs-ride="carousel"
//                 >
//                   <div className="carousel-inner">
//                     {images.map((img, idx) => (
//                       <div
//                         className={`carousel-item ${idx === 0 ? "active" : ""}`}
//                         key={idx}
//                       >
//                         <div className="border-0 card text-bg-dark">
//                           <img
//                             src={img.src}
//                             alt={img.title}
//                             className="card-img"
//                             style={{ height: "450px", objectFit: "cover" }}
//                           />
//                           <div className="bg-opacity-25 card-img-overlay bg-dark d-flex flex-column justify-content-end">
//                             <h5 className="card-title">{img.title}</h5>
//                             <p className="card-text">{img.description}</p>
//                             <p className="card-text">
//                               <small className="text-muted">{img.updated}</small>
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Prev & Next */}
//                   <button
//                     className="carousel-control-prev"
//                     type="button"
//                     data-bs-target="#carouselInsideModal"
//                     data-bs-slide="prev"
//                   >
//                     <span
//                       className="carousel-control-prev-icon"
//                       aria-hidden="true"
//                     ></span>
//                     <span className="visually-hidden">Previous</span>
//                   </button>
//                   <button
//                     className="carousel-control-next"
//                     type="button"
//                     data-bs-target="#carouselInsideModal"
//                     data-bs-slide="next"
//                   >
//                     <span
//                       className="carousel-control-next-icon"
//                       aria-hidden="true"
//                     ></span>
//                     <span className="visually-hidden">Next</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="border-0 modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                 >
//                   बंद करें
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default VidhansabhaCategoryCarousel;

import React, { useState } from "react";

// Data for all categories
const categories = {
  entry: {
    label: "विधानसभा भवन",
    thumbnail: "tours/vidhan-1.jpg",
    images: [
      { src: "tours/vidhan-1.jpg", title: "मुख्य प्रवेश द्वार", description: "यह विधानसभा भवन का प्रमुख प्रवेश द्वार है।", updated: "3 मिनट पहले" },
      { src: "tours/vidhan-2.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
      { src: "tours/vidhan-3.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
      { src: "tours/vidhan-4.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
      { src: "tours/vidhan-5.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
      { src: "tours/vidhan-6.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
      { src: "tours/vidhan-7.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
      { src: "tours/vidhan-8.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
      { src: "tours/vidhan-9.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" },
      { src: "tours/vidhan-10.jpg", title: "सामने का दृश्य", description: "मुख्य द्वार से भवन का दृश्य।", updated: "5 मिनट पहले" }
    ],
  },

  hall: {
    label: "सभागार",
    thumbnail: "tours/sabhaghar-7.jpg",
    images: [
      { src: "tours/sabhaghar-1.jpg", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
      { src: "tours/sabhaghar-2.jpg", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
      { src: "tours/sabhaghar-3.jpg", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
      { src: "tours/sabhaghar-4.jpg", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
      { src: "tours/sabhaghar-5.jpg", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
      { src: "tours/sabhaghar-6.jpg", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" },
      { src: "tours/sabhaghar-7.jpg", title: "विधानसभा हॉल", description: "यहाँ विधायकों की बैठकें होती हैं।", updated: "7 मिनट पहले" }
    ],
  },

  night: {
    label: "रात्रि दृश्य",
    thumbnail: "tours/night.JPG",
    images: [
      { src: "tours/DSC_0079.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
      { src: "tours/DSC_0086.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
      { src: "tours/DSC_0087.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
      { src: "tours/DSC_0088.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
      { src: "tours/DSC_0089.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
      { src: "tours/DSC_0090.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
      { src: "tours/DSC_0091.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" },
      { src: "tours/DSC_0092.jpg", title: "रात्रि में विधानसभा", description: "बत्तियों से जगमगाता हुआ भवन।", updated: "12 मिनट पहले" }
    ],
  },
   nationalemblem: {
    label: "राष्ट्रीय प्रतीक",
    thumbnail: "tours/nationalemblem-1.jpg",
    images: [
      { src: "tours/nationalemblem-1.jpg", title: "विधानसभा बगीचा", description: "राष्ट्रीय प्रतीक किसी देश की पहचान, संस्कृति, इतिहास और गौरव का प्रतिनिधित्व करते हैं। ये नागरिकों में एकता और गर्व की भावना जगाते हैं।", updated: "30 मिनट पहले" },
      { src: "tours/nationalemblem-2.jpg", title: "विधानसभा बगीचा", description: "भारत का राष्ट्रीय चिह्न सिंह स्तंभ है, जो सारनाथ में अशोक स्तंभ से लिया गया है। इसमें चार शेर हैं, जिनमें केवल तीन दिखाई देते हैं। नीचे अशोक चक्र और एक हाथी, घोड़ा, बैल और सिंह की आकृतियाँ हैं।", updated: "30 मिनट पहले" },
      { src: "tours/nationalemblem-3.jpg", title: "विधानसभा बगीचा", description: "तिरंगा भारत का राष्ट्रीय ध्वज है, जिसमें तीन रंग होते हैं – केसरिया (त्याग), सफेद (सत्य), और हरा (समृद्धि)। मध्य में 24 तीलियों वाला अशोक चक्र है।", updated: "30 मिनट पहले" },
      { src: "tours/nationalemblem-4.jpg", title: "विधानसभा बगीचा", description: "जन गण मन भारत का राष्ट्रीय गान है, जिसे रविंद्रनाथ टैगोर ने लिखा था। यह देश की एकता और विविधता का प्रतिनिधित्व करता है।", updated: "30 मिनट पहले" },
      { src: "tours/nationalemblem-5.jpg", title: "विधानसभा बगीचा", description: "वंदे मातरम् भारत का राष्ट्रीय गीत है, जिसे बंकिम चंद्र चट्टोपाध्याय ने संस्कृत में लिखा था। यह भारत माता की स्तुति करता है।", updated: "30 मिनट पहले" },
      { src: "tours/nationalemblem-6.jpg", title: "विधानसभा बगीचा", description: "बाघ भारत का राष्ट्रीय पशु है। यह शक्ति, साहस और गौरव का प्रतीक है।", updated: "30 मिनट पहले" },
      { src: "tours/nationalemblem-7.jpg", title: "विधानसभा बगीचा", description: "मोर भारत का राष्ट्रीय पक्षी है। यह सुंदरता, संस्कृति और सौंदर्य का प्रतीक है।", updated: "30 मिनट पहले" },
      { src: "tours/nationalemblem-8.jpg", title: "विधानसभा बगीचा", description: " ", updated: "30 मिनट पहले" },


    ],
  },
   library: {
    label: "पुस्तकालय",
    thumbnail: "tours/पुस्तकालय-14.jpg",
    images: [
      { src: "tours/पुस्तकालय-1.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-2.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-3.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-4.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-5.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-6.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-7.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-8.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-9.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-10.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-11.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-12.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-13.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-14.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
      { src: "tours/पुस्तकालय-15.jpg", title: "विधानसभा पुस्तकालय", description: "यहाँ विभिन्न विधायी संदर्भ पुस्तकें उपलब्ध हैं।", updated: "25 मिनट पहले" },
    ],
  },
  House: {
    label: "हाउस",
    thumbnail: "tours/House-1.jpg",
    images: [
      { src: "tours/House-1.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
      { src: "tours/House-2.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
      { src: "tours/House-3.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
      { src: "tours/House-4.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
      { src: "tours/House-5.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" },
       { src: "tours/House-6.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-7.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-8.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-9.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-10.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-11.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-12.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-13.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-14.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-15.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-16.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-17.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-18.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-19.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-20.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-21.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-22.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-23.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-24.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-25.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-26.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-27.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-28.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-29.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-30.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
       { src: "tours/House-131.jpg", title: "विधानसभा हाउस", description: "यह विधानसभा हाउस है।", updated: "30 मिनट पहले" }, 
      
    ],
  },

  // gallery: {
  //   label: "प्रदर्शनी",
  //   thumbnail: "tours/प्रदर्शनी1.jpg",
  //   images: [
  //     { src: "tours/प्रदर्शनी1.jpg", title: "प्रदर्शनी क्षेत्र", description: "स्मृति चिह्न और ऐतिहासिक दस्तावेज़।", updated: "20 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी2.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी3.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी4.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी5.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी6.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी7.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी8.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी9.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी10.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी11.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी12.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी13.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी14.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी15.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी16.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी17.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी18.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी20.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी21.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी22.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी23.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी24.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी26.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //     { src: "tours/प्रदर्शनी27.jpg", title: "चित्र प्रदर्शनी", description: "महत्वपूर्ण घटनाओं की झलकियाँ।", updated: "21 मिनट पहले" },
  //   ],
  // }
};

// Component
const VidhansabhaCategoryCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const openCategoryModal = (categoryKey) => {
    setActiveCategory(categoryKey);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveCategory(null);
  };

  const images = activeCategory ? categories[activeCategory].images : [];

  return (
    
    <>
     {/* ✅ Main Heading */}
    <div className="my-4 text-center">
      <h2 className="fw-bold text-primary">विधानसभा भ्रमण</h2>
      <p className="text-muted">विधानसभा परिसर की श्रेणियाँ देखें</p>
    </div>
      {/* ✅ Category Thumbnails */}
      <div className="container py-4">
        <div className="row justify-content-center g-4">
          {Object.entries(categories).map(([key, value]) => (
            <div key={key} className="text-center col-6 col-md-4">
              <img
                src={value.thumbnail}
                alt={value.label}
                className="rounded shadow-sm img-fluid"
                style={{ maxWidth: "280px", cursor: "pointer" }}
                onClick={() => openCategoryModal(key)}
              />
              <p className="mt-2 text-primary fw-bold">{value.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ React Controlled Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="text-white modal-content bg-dark">
              <div className="border-0 modal-header">
                <h5 className="modal-title">
                  {activeCategory ? categories[activeCategory].label : ""}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                ></button>
              </div>

              <div className="p-0 modal-body">
                <div
                  id="carouselInsideModal"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {images.map((img, idx) => (
                      <div
                        className={`carousel-item ${idx === 0 ? "active" : ""}`}
                        key={idx}
                      >
                        <div className="border-0 card text-bg-dark">
                          <img
                            src={img.src}
                            alt={img.title}
                            className="card-img"
                            style={{ height: "450px", objectFit: "cover" }}
                          />
                          <div className="bg-opacity-25 card-img-overlay bg-dark d-flex flex-column justify-content-end">
                            <h5 className="card-title">{img.title}</h5>
                            <p className="card-text">{img.description}</p>
                            <p className="card-text">
                              <small className="text-muted">{img.updated}</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Prev & Next */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselInsideModal"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselInsideModal"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="border-0 modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  बंद करें
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VidhansabhaCategoryCarousel;