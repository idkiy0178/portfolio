const ProfilePage = () => {
  return (
    <div>
      <h2 className="xl:text-4xl sm:text-3xl text-2xl font-bold pt-28 pb-5">
        Profile
      </h2>
      <table className="text-xl">
        <tbody>
          <tr>
            <td className="pr-8">2024 - 現在</td>
            <td>大阪公立大学大学院 情報学研究科</td>
          </tr>
          <tr>
            <td className="pr-8">2020 - 2024</td>
            <td>大阪府立大学 工学域 電気電子系学類 情報工学課程 </td>
          </tr>
          <tr>
            <td className="pr-8">2017 - 2020</td>
            <td>島根県立松江北高等学校</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;
