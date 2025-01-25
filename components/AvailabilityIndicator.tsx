function AvailabilityIndicator() {
    return (
      <div className="relative">
        <div className="w-[8px] h-[8px] rounded-full bg-[--green] "></div>
        <div className="absolute top-0 left-0 w-[8px] h-[8px] rounded-full bg-[--green] opacity-75 animate-ping"></div>
      </div>
    );
  }
  
  export default AvailabilityIndicator;