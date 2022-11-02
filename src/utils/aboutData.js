import icon1 from "../assets/images/team/ai1.svg";
import icon2 from "../assets/images/team/ai2.svg";
import icon3 from "../assets/images/team/ai3.svg";
import icon4 from "../assets/images/team/ai4.svg";
import icon5 from "../assets/images/team/ai5.svg";
import icon6 from "../assets/images/team/ai6.svg";

const icon1Text = "Responsive Design";
const icon2Text = "Pixel Perfect";
const icon3Text = "Validated Code";
const icon4Text = "Well Commented Code";
const icon5Text = "Lifetime Updates";
const icon6Text = "24/7 Support";

const card1 = (
  <div className="flex justify-center bg-[#fdce36] border rounded-[50%] w-[80px] h-[80px]  mx-auto  mb-4">
    <img src={icon1} alt="" width="30px" height="32px" />
  </div>
);
const card2 = (
  <div className="flex justify-center bg-[#ae88e6] border rounded-[50%] w-[80px] h-[80px]  mx-auto  mb-4">
    <img src={icon2} alt="" width="30px" height="32px" />
  </div>
);
const card3 = (
  <div className="flex justify-center bg-[#82d0e8] border rounded-[50%] w-[80px] h-[80px]  mx-auto  mb-4">
    <img src={icon3} alt="" width="30px" height="32px" />
  </div>
);
const card4 = (
  <div className="flex justify-center bg-[#6bf1d6] border rounded-[50%] w-[80px] h-[80px]  mx-auto  mb-4">
    <img src={icon4} alt="" width="30px" height="32px" />
  </div>
);
const card5 = (
  <div className="flex justify-center bg-[#f091ba] border rounded-[50%] w-[80px] h-[80px]  mx-auto  mb-4">
    <img src={icon5} alt="" width="30px" height="32px" />
  </div>
);
const card6 = (
  <div className="flex justify-center bg-[#b6cdf6] border rounded-[50%] w-[80px] h-[80px]  mx-auto  mb-4">
    <img src={icon6} alt="" width="30px" height="32px" />
  </div>
);

const icon1Exp =
  "Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac non augue. Aenean ornare sit amet lectus lorem est.";
const icon2Exp =
  "Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac non augue. Aenean ornare sit amet lectusd lorem est.";
const icon3Exp =
  "Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac non augue. Aenean ornare sit amet lectusd lorem est.";
const icon4Exp =
  "Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac non augue. Aenean ornare sit amet lectusd lorem est.";
const icon5Exp =
  "Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac non augue. Aenean ornare sit amet lectusd lorem est.";
const icon6Exp =
  "Aenean sed lorem est. Sed quis neque ut nibh suscipit imperdiet ac non augue. Aenean ornare sit amet lectus lorem est.";

export const cartData = [
  { img: card1, icon: icon1, text: icon1Text, explanation: icon1Exp },
  { img: card2, icon: icon3, text: icon2Text, explanation: icon2Exp },
  { img: card3, icon: icon4, text: icon3Text, explanation: icon3Exp },
  { img: card4, icon: icon4, text: icon4Text, explanation: icon4Exp },
  { img: card5, icon: icon5, text: icon5Text, explanation: icon5Exp },
  { img: card6, icon: icon6, text: icon6Text, explanation: icon6Exp },
];
