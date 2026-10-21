const noticeData = {
    date: "13/09/2026",
    content: [
        "Bạn có thể tập thử 1 vài App trong hệ thống tập Nhược Thị - Thị Giác 2 mắt ShineVisionApp",
        "Kích hoạt tài khoản để sử dụng Trọn Đời và Đầy đủ tính năng"
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const noticeContentDiv = document.getElementById("notice-content");
    if (noticeContentDiv && typeof noticeData !== "undefined") {
        let listHtml = noticeData.content.map(item => `<li>${item}</li>`).join("");
        noticeContentDiv.innerHTML = `
            <div class="notice-date">Update ngày ${noticeData.date}</div>
            <ul class="notice-list">
                ${listHtml}
            </ul>
        `;
    }
});