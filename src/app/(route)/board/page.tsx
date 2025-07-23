export default function BoardWritePage() {
  return (
    <>
      <section
        className="min-h-screen bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(/main/paper2.jpg)` }}
      >
        <div className="p-4 my-[120px] w-[900px] mx-auto bg-[#efefef] shadow-xl">
          <h1>자유 게시판 - 글 작성</h1>
          <form
            className="w-full h-full p-4 mx-auto
            border-1 border-[#333]"
          >
            <div className="mb-2 flex gap-2">
              <div>
                <label htmlFor="" className="block">
                  닉네임
                </label>
                <input
                  type="text"
                  className="w-[240px] p-1 px-2 border-1 rounded outline-[#ff69b4]"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  비밀번호
                </label>
                <input
                  type="password"
                  className="w-[240px] p-1 px-2 border-1 rounded outline-[#ff69b4]"
                  placeholder=""
                />
              </div>
            </div>
            <input
              type="text"
              className="w-full p-2 border-1 rounded outline-[#ff69b4]"
              placeholder="제목을 입력해주세요."
            />

            <textarea className="w-full min-h-[400px] p-2 mt-4 border-1 rounded"></textarea>
            <button
              type="button"
              className="w-[160px] py-2 bg-[#333] rounded text-white font-bold mt-4"
            >
              작성하기
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
