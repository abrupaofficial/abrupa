function AnnouncementBar() {
  const messages = [
    "JOIN THE LIST FOR EARLY ACCESS",
    "ABRUPA • ABRUPA.SHOP",
    "QUIET LUXURY, QUIETLY HANDCRAFTED",
    "LAUNCHING SOON — JOIN THE LIST FOR EARLY ACCESS",
  ];

  return (
    <div className="overflow-hidden bg-[#1C1512] py-2 text-[#E8E1D5]">
      <div className="announcement-track flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-[10px] font-medium tracking-[0.22em] md:text-xs">
        
        {[...messages, ...messages].map((message, index) => (
          <div key={index} className="flex items-center gap-10">
            <span>{message}</span>

            <span className="text-[#C9A227]">✦</span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default AnnouncementBar;