import Image from "next/image";
import ChatHamburger from "../../../employers-dashboard/messages/components/ChatHamburger";

const ChatBoxContentField = () => {
  return (
    <div className="card message-card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <Image
              width={48}
              height={48}
              src="/images/resource/candidate-8.png"
              alt="48"
              className="rounded-circle user_img"
            />
          </div>
          <div className="user_info">
            <span>محمود السعيد</span>
            {/* <p>نشط</p> */}
          </div>
        </div>

        <div className="btn-box">
          <button className="dlt-chat">حذف المحادثة</button>
          <ChatHamburger />
        </div>
      </div>
      {/* End .cart-header */}

      <div className="card-body msg_card_body">
        <div className="d-flex justify-content-start mb-2">
          <div className="img_cont_msg">
            <Image
              width={48}
              height={48}
              src="/images/resource/candidate-3.png"
              alt="image"
              className="rounded-circle user_img_msg"
            />
            <div className="name">
              محمود السعيد
            </div>
          </div>
          <div className="msg_cotainer">
            كيف حالك
          </div>
        </div>

        <div className="d-flex justify-content-end mb-2 reply">
          <div className="img_cont_msg">
            <Image
              width={48}
              height={48}
              src="/images/resource/candidate-6.png"
              alt=""
              className="rounded-circle user_img_msg"
            />
            <div className="name">
              انت <span className="msg_time">35 دقيقة</span>
            </div>
          </div>
          <div className="msg_cotainer">
            لست علي مايرام
          </div>
        </div>

      </div>
      {/* End .card-body */}

      <div className="card-footer">
        <div className="form-group mb-0">
          <form>
            <textarea
              className="form-control type_msg"
              placeholder="اكتب رسالتك..."
              required
            ></textarea>
            <button
              type="submit"
              className="theme-btn btn-style-one submit-btn"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
      {/* End .card-footer */}
    </div>
  );
};

export default ChatBoxContentField;
