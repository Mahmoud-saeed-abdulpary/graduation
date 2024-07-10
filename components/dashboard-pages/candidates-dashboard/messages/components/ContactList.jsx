import Image from "next/image";

const ChatboxContactList = () => {
  return (
    <ul className="contacts">
      <li>
        <a href="#">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <Image
                src="/images/resource/candidate-1.png"
                className="rounded-circle user_img"
                alt="chatbox avatar"
                width={90}
                height={90}
              />
            </div>
            <div className="user_info">
              <span>محمود السعيد</span>
              <p> مبرمج فاشل</p>
            </div>
            <span className="info">10 دقائق
              <span className="count">2</span>
            </span>
          </div>
        </a>
      </li>
      {/* End single Contact List */}
      <li>
        <a href="#">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <Image
                src="/images/resource/candidate-1.png"
                className="rounded-circle user_img"
                alt="chatbox avatar"
                width={90}
                height={90}
              />
            </div>
            <div className="user_info">
              <span>محمود السعيد</span>
              <p> مبرمج فاشل</p>
            </div>
            <span className="info">10 دقائق
              <span className="count">2</span>
            </span>
          </div>
        </a>
      </li>
      {/* End single Contact List */}
      <li>
        <a href="#">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <Image
                src="/images/resource/candidate-1.png"
                className="rounded-circle user_img"
                alt="chatbox avatar"
                width={90}
                height={90}
              />
            </div>
            <div className="user_info">
              <span>محمود السعيد</span>
              <p> مبرمج فاشل</p>
            </div>
            <span className="info">10 دقائق
              <span className="count">2</span>
            </span>
          </div>
        </a>
      </li>
      {/* End single Contact List */}
      <li>
        <a href="#">
          <div className="d-flex bd-highlight">
            <div className="img_cont">
              <Image
                src="/images/resource/candidate-1.png"
                className="rounded-circle user_img"
                alt="chatbox avatar"
                width={90}
                height={90}
              />
            </div>
            <div className="user_info">
              <span>محمود السعيد</span>
              <p> مبرمج فاشل</p>
            </div>
            <span className="info">10 دقائق
              <span className="count">2</span>
            </span>
          </div>
        </a>
      </li>
      {/* End single Contact List */}

    </ul>
  );
};

export default ChatboxContactList;
