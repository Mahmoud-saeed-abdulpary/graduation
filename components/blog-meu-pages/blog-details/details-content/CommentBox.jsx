import Image from "next/image";

const CommentBox = () => {
  // Define an array of comment objects
  const comments = [
    {
      id: 1,
      userName: "أحمد ابراهيم",
      userThumbSrc: "/images/resource/avatar-1.jpg",
      title: "شكرا علي المقالة",
      text: "شكرا علي المجهود العظيم الذي تم بذله في اعداد مثل هذه المقالة اتمني ان تستمرو في تقديم افضل الممارسات في المنصة",
    },
    {
      id: 2,
      userName: "سيد سليمان",
      userThumbSrc: "/images/resource/avatar-2.jpg",
      title: "موضوع المقالة جميل جدا",
      text: "شكرا علي المجهود العظيم الذي تم بذله في اعداد مثل هذه المقالة اتمني ان تستمرو في تقديم افضل الممارسات في المنصة",
    },
    // Add more comments as needed
  ];

  return (
    <>
      {" "}
      <h4>Comment</h4>
      {comments.map((comment) => (
        <div className="comment-box" key={comment.id}>
          {/* Comment */}
          <div className="comment">
            <div className="user-thumb">
              <Image
                width={80}
                height={79}
                src={comment.userThumbSrc}
                alt="resource"
              />
            </div>
            <div className="comment-info">
              <div className="user-name">{comment.userName}</div>
              <div className="title">{comment.title}</div>
            </div>
            <div className="text">{comment.text}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentBox;
