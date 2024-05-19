const ProfilePage = () => {
  return (
    // <div>
    //   <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold pt-28 pb-5">
    //     Profile
    //   </h2>
    //   <table className="text-xl">
    //     <tbody>
    //       <tr>
    //         <td className="pr-8">2024 - 現在</td>
    //         <td>大阪公立大学大学院 情報学研究科</td>
    //       </tr>
    //       <tr>
    //         <td className="pr-8">2020 - 2024</td>
    //         <td>大阪府立大学 工学域 電気電子系学類 情報工学課程</td>
    //       </tr>
    //       <tr>
    //         <td className="pr-8">2017 - 2020</td>
    //         <td>島根県立松江北高等学校</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>

    <div className="">
      {/* <h2 className="xl:text-4xl md:text-3xl sm:text-2xl text-lg font-bold pt-28 pb-5"> */}
      <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold pt-20 md:pt-28 pb-7">
        Profile
      </h2>
      {/* <table className="table-auto text-base sm:text-lg md:text-xl"> */}
      <table className="table-auto">

        {/* md以下で縦並びにする */}
        {/* <tbody>
          <tr className="flex flex-col md:table-row">
            <td className="order-2 md:order-1 pb-4 md:pb-0 md:pr-8 text-sm sm:text-base md:text-xl">2024 - 現在</td>
            <td className="order-1 md:order-2 md:py-2 text-base sm:text-lg md:text-xl">大阪公立大学大学院 情報学研究科</td>
          </tr>
          <tr className="flex flex-col md:table-row">
            <td className="order-2 md:order-1 pb-4 md:pb-0 md:pr-8 text-sm sm:text-base md:text-xl">2020 - 2024</td>
            <td className="order-1 md:order-2 md:py-2 text-base sm:text-lg md:text-xl">大阪府立大学 工学域 情報工学課程</td>
          </tr>
          <tr className="flex flex-col md:table-row">
            <td className="order-2 md:order-1 md:pb-0 md:pr-8 text-sm sm:text-base md:text-xl">2017 - 2020</td>
            <td className="order-1 md:order-2 md:py-2 text-base sm:text-lg md:text-xl">島根県立松江北高等学校</td>
          </tr>
        </tbody> */}

        {/* sm以下で縦並びにする */}
        <tbody>
          <tr className="flex flex-col sm:table-row">
            <td className="order-2 sm:order-1 pb-4 sm:pb-0 sm:pr-8 text-sm sm:text-lg md:text-xl">2024 - 現在</td>
            <td className="order-1 sm:order-2 sm:py-2 text-base sm:text-lg md:text-xl">大阪公立大学大学院 情報学研究科</td>
          </tr>
          <tr className="flex flex-col sm:table-row">
            <td className="order-2 sm:order-1 pb-4 sm:pb-0 sm:pr-8 text-sm sm:text-lg md:text-xl">2020 - 2024</td>
            <td className="order-1 sm:order-2 sm:py-2 text-base sm:text-lg md:text-xl">大阪府立大学 工学域 情報工学課程</td>
          </tr>
          <tr className="flex flex-col sm:table-row">
            <td className="order-2 sm:order-1 sm:pr-8 text-sm sm:text-lg md:text-xl">2017 - 2020</td>
            <td className="order-1 sm:order-2 sm:py-2 text-base sm:text-lg md:text-xl">島根県立松江北高等学校</td>
          </tr>
        </tbody>

      </table>
    </div>
  );
};

export default ProfilePage;
