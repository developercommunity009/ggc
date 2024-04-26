import React, { useState } from "react";
import { motion } from "framer-motion";
import xmark from "../../assets/xmark.png";
import plus from "../../assets/plus.png";

const data = [
  {
    ques: "Install a Metamask Wallet",
    ans: "Before buying GGE tokens, buyer will need to Install a Metamask Wallet.",
  },
  {
    ques: "Transfer USDT to Metamask",
    ans: "Next, transfer USDT to the MetaMask wallet for buying GGE tokens.",
  },
  {
    ques: "Connect MetaMask wallet ",
    ans: "Click on Connect wallet button and connect with website.",
  },
  {
    ques: "Buy GGE Token",
    ans: "Write USDT amount and click on Buy GGE button.It will take 2 transaction. First for your usdt approval and second for buying GGE tokens. Wait for the GGE tokens to arrive in your MetaMask wallet, which usually takes 1-2 minutes.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState();

  const handleSetIndex = (index) => {
    if (index === activeIndex) {
      setActiveIndex("");
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-[#080513] relative" id="buy">
      <div className="md:light-blue hidden md:flex md:absolute top-0 right-[-30px] h-[250px] md:h-[300px] w-[250px] md:w-[300px] z-30" />

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        initial="hidden"
        style={{ opacity: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-5 py-10 md:py-12">
          <h2 className="text-[#ECE8F0] text-center text-[25px] sm:text-[30px] md:text-[38px] font-bold leading-9">
            How to Buy GGE
          </h2>

          <div className="max-w-[800px] mx-auto mt-5 md:mt-8">
            {data.map((item, i) => (
              <ul className="flex flex-col" key={i}>
                <li
                  className="bg-transparent my-2 shadow-md rounded-md"
                  onClick={() => handleSetIndex(i)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h2 className="font-medium p-1 cursor-pointer text-[14px] md:text-[17px] text-[#ECE8F0]">
                      <span>{item.ques}</span>
                    </h2>
                    <div>
                      {activeIndex === i ? (
                        <img src={xmark} alt="icon" />
                      ) : (
                        <img src={plus} alt="icon" />
                      )}
                    </div>
                  </div>
                  <div
                    x-ref="tab"
                    className={` overflow-hidden duration-500 transition-all ${
                      activeIndex === i ? "max-h-[400px] " : "max-h-0 "
                    }`}
                  >
                    <p className=" py-2 md:py-4 px-2 md:px-4 text-[#ADA9B2] text-[12px] md:text-[15px] ">
                      {item.ans}
                    </p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;
