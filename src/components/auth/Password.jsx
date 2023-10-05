const Password = () => {
  return (
    <section className="flex flex-col gap-2">
      {/* Email */}
      <label htmlFor="email" className="text-sm font-medium font-work">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email address"
        className="w-[18rem] md:w-[28rem] font-work font-medium text-[1rem] border-[#B6B3C6] border-solid border-[1px] text-[#626262] rounded-xl py-2 pl-2"
      />

      {/* Password */}
      <label htmlFor="password" className="mt-2 text-sm font-medium font-work">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Enter your Password"
        className="w-[18rem] md:w-[28rem] font-work font-medium text-[1rem] border-[#B6B3C6] border-solid border-[1px] text-[#626262] rounded-xl py-2 pl-2"
      />
    </section>
  );
};

export default Password;
