// ================================
// 🎉 My Birthday Message Logic : RKP
// ================================

// Get today's date info
const today = new Date();
const month = today.getMonth() + 1; // 1-12
const day = today.getDate();
const weekday = today.getDay(); // 0=Sunday

let message = "";

// ===============
// 1. WEEKLY LOGIC
// ===============
if (weekday === 0) {
    // Every Sunday
    message = "😎 आज तो Sunday है, मौज करो यार... न कोई काम, न कोई टेंशन! 😅👍";
}

// ========================
// 2. MONTH-WISE SPECIALS
// ========================
else switch (month) {
    // ----------------
    // JANUARY SPECIALS
    // ----------------
    case 1:
        if (day === 1) message = "🎉 Happy New Year! Aaj se Zindagi ki nayi Shuruaat ho rahi hai. Khus raho aur maje karo";
        else if (day === 14) message = "🪁 Makar Sankranti! Til-gud ghya, god god bola!";
        else if (day === 25) message = "Aaj mera half brithday hai aur aaj se thik 6 mahine bad mera birthday hai 🎂🎉";
        else if (day === 26) message = "🇮🇳 Happy Republic Day! Jai Hind!";
        else if (day % 4 === 0) message = "❄️ Thand ka mausam hai, sweater pehanke mere birthday ka wait karo 😅";
        break;

    // -----------------
    // FEBRUARY SPECIALS
    // -----------------
    case 2:
        if (day === 2) message = "मुझे बाद में बर्थडे विश करना, पहले आज मेरे Aman भैया को विश करो! 🎂🎉";
        else if (day === 7) message = "🌹 Happy Rose Day! Single हो तो रोते रहो और डबल हो तो और भी ज्यादा रोओ";
        else if (day === 8) message = "💍 Happy Propose Day! Single हो तो रोते रहो और डबल हो तो और भी ज्यादा रोओ";
        else if (day === 9) message = "🍫 Happy Chocolate Day! Single हो तो मुझे चॉकलेट खाने के लिए रुपये भेज दो 😅👍";
        else if (day === 10) message = "🧸 Happy Teddy Day! Single रहने का एक अलग ही दुख है, किसको टेडी दें समझ ही नहीं आता 😅👍";
        else if (day === 11) message = "🤝 Happy Promise Day! झूठी कसम खाओ और दूसरों से खिलाओ भी 😅💀";
        else if (day === 12) message = "🤗 Happy Hug Day! टॉयलेट में मिलते हैं 😅💩";
        else if (day === 13) message = "😘 Happy Kiss Day! Single हो तो रोते रहो और डबल हो तो और भी ज्यादा रोओ 😅👍";
        else if (day === 14) message = "Happy Velentine Day! Single हो तो रोते रहो और डबल हो और भी ज्यादा रोओ 😅👍";
        break;

    // --------------
    // MARCH SPECIALS
    // --------------
    case 3:
        message = "Are Yaar exams चल रहे हैं, थोड़ा पढ़ाई कर लो 😅📚";
        break;

    // --------------
    // APRIL SPECIALS
    // --------------
    case 4:
        if (day === 1) message = "Happy April Fool, अब तक किसी को fool नहीं बनाया तुमने 😅🤭";
        else if ((day % 7 === 0)) message = "🕌 भाई मैं कट्टर हिन्दू हूँ, पर फिर भी मेरे सारे मुस्लिम भाइयों को Eid Mubarak! खुशियाँ बांटो भाईजान 🕋✨";
        break;

    // --------------
    // MAY SPECIALS
    // --------------
    case 5:
        if ((day % 7 === 0)) message = "🕌 भाई मैं कट्टर हिन्दू हूँ, पर फिर भी मेरे सारे मुस्लिम भाइयों को Eid Mubarak! खुशियाँ बांटो भाईजान 🕋✨";
        break;

    // ---------------
    // JUNE SPECIALS
    // ---------------
    case 6:
        if ((day % 7 === 0)) message = "🕌 भाई मैं कट्टर हिन्दू हूँ, पर फिर भी मेरे सारे मुस्लिम भाइयों को Eid Mubarak! खुशियाँ बांटो भाईजान 🕋✨";
        else if (day === 21) message = "🧘‍♂️ Happy Yoga Day! ";
        break;

    // ---------------
    // JULY SPECIALS
    // ---------------
    case 7:
        if (day === 25) message = "🎉 आज मेरा Birthday है! Let's Celebrate! 🎂🎊";
        break;

    // ----------------
    // AUGUST SPECIALS
    // ----------------
    case 8:
        if (day === 15) message = "🇮🇳 Happy Independence Day! भारत माता की जय!";
        break;

    // -----------------
    // SEPTEMBER SPECIALS
    // -----------------
    case 9:
        if (day === 5) message = "Happy Teachers Day 👨‍🏫 Backbenchers Zindabad 😅💀";
        break;

    // -----------------
    // OCTOBER SPECIALS
    // -----------------
    case 10:
        if (day >= 15 && day <= 25) message = "🏹 Vijayadashami! बुराई पर अच्छाई की जीत!";
        break;

    // -----------------
    // NOVEMBER SPECIALS
    // -----------------
    case 11:
        if (day === 14) message = "🧒 Happy Children's Day! ज़रा याद करो वो पल जब तुम पैंट में susu कर दिया करते थे 😅💦";
        else if (day === 26) message = "मुझे बाद में बर्थडे विश करना, पहले आज मेरे छोटे भाई Rohit को विश करो! 🎂🎉";
        break;

    // -----------------
    // DECEMBER SPECIALS
    // -----------------
    case 12:
        if (day === 25) message = "Happy Tulsi Pujan Diwas! Please अपने घर एक तुलसी का पौधा जरूर लगाएं 🙏";
        else if (day === 31) message = "🥂 Last day of the year! कल से नए goals और नए plans!";
        else if (day % 4 === 0) message = "❄️ ठंड का मौसम है, sweater पहन के मेरे birthday का wait करो 😅";
        break;
}

// ================================
// 3. COUNTDOWN-SPECIFIC MESSAGES
// ================================
if (!message) {
    // Make sure months, days, hours, minutes, seconds are available in scope
    if (typeof months !== "undefined" && typeof days !== "undefined" && typeof hours !== "undefined" && typeof minutes !== "undefined" && typeof seconds !== "undefined") {
        // 3/2/1 month messages (priority after special dates)
        if (months > 3) {
            message = "⌛ अभी बहुत टाइम है Birthday आने में... So chill! 😎";
        } else if (months === 3 && days >= 0) {
            message = "🎂 3 महीने बाद मेरा Birthday है! इंतजार करो...";
        } else if (months === 2 && days >= 0) {
            message = "🎂 2 महीने बाद मेरा Birthday है! थोड़ा और इंतजार...";
        } else if (months === 1 && days >= 0) {
            message = "🎂 1 महीना बाद मेरा Birthday है! Excitement बढ़ रही है!";
        }
        // Weeks/days/hours/minutes/seconds logic
        else if (months === 1 && days === 0) message = "⏳ 1 महीना बाकी... Are You Excited? 🎈";
        else if (months === 0 && days >= 21) message = "🎉 3 हफ्ते बाकी! Excited हो? 🔥";
        else if (months === 0 && days >= 14) message = "🔥 2 हफ्ते और... मजा आएगा! 😆";
        else if (months === 0 && days >= 7) message = "🕺 1 हफ्ता और... पार्टी TIME! 🎊";
        else if (months === 0 && days === 2) message = "🤯 सिर्फ 2 दिन बाकी! 🎂";
        else if (months === 0 && days === 1) message = "🥳 कल बर्थडे है! तैयारी पूरी? 🔥";
        else if (months === 0 && days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            message = "🎉 आज मेरा Birthday है! Let's Celebrate! 🎂🎊";
        } else {
            message = "⌛ अभी बहुत टाइम है Birthday आने में... So chill! 😎";
        }
    } else {
        message = "⌛ अभी बहुत टाइम है Birthday आने में... So chill! 😎";
    }
}

// ================================
// 4. SHOW THE MESSAGE
// ================================
document.getElementById("messageBox").innerHTML = message;
          
