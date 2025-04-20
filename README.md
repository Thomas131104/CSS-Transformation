# CSS Transformations Project

Dự án này trình bày các hiệu ứng CSS transform, bao gồm các hiệu ứng 2D và 3D như xoay, phóng to, thu nhỏ, và các chuyển động khác. Các hiệu ứng này được áp dụng trên các phần tử HTML thông qua các file CSS riêng biệt, giúp bạn dễ dàng kiểm tra và áp dụng từng loại hiệu ứng.

## Cấu Trúc Thư Mục

```
\css-transform 
├── index.html <-- Trang chính 
├── image 
│   |
|   └── icons8-css-ios-17-filled-16.png <-- Hình ảnh icon 
├── style 
|   │   
|   ├── style.css <-- Các thiết lập chung của trang 
|   │  
│   ├── transform2d.css <-- Các hiệu ứng 2D 
|   │  
│   └── transform3d.css <-- Các hiệu ứng 3D 
└── template 
    |    
    ├── transform2d.html <-- HTML cho hiệu ứng 2D 
    |
    └── transform3d.html <-- HTML cho hiệu ứng 3D
```



## Cài Đặt và Sử Dụng

### Cài Đặt

1. **Tải về dự án**:

- Clone dự án từ kho lưu trữ (hoặc tải file zip nếu dự án ở trên GitHub):
```bash
git clone https://github.com/Thomas131104/css-transform.git
```

2. Mở các file trong trình duyệt:

- Sau khi tải về hoặc clone dự án, mở các file transform2d.html hoặc transform3d.html trong trình duyệt của bạn để kiểm tra các hiệu ứng.

3. Kiểm tra các hiệu ứng CSS:

- Mỗi trang HTML (transform2d.html hoặc transform3d.html) sẽ hiển thị các hiệu ứng chuyển động khác nhau mà bạn có thể áp dụng cho các phần tử HTML.



## Cấu Trúc Các File CSS

- style.css: Là file CSS chính, chứa các thiết lập chung cho trang.

- transform2d.css: Chứa các hiệu ứng CSS 2D như xoay, phóng to, thu nhỏ, và dịch chuyển các phần tử theo các trục X, Y.

- transform3d.css: Chứa các hiệu ứng CSS 3D, bao gồm các hiệu ứng xoay 3D và các chuyển động theo không gian 3D.



## Cách Liên Kết Các File CSS với HTML

Liên kết CSS vào HTML: Trong mỗi file HTML (ví dụ transform2d.html hoặc transform3d.html), bạn cần thêm liên kết tới các file CSS tương ứng.

```html
<link rel="stylesheet" href="../style/transform2d.css"> <!-- Cho 2D -->
<link rel="stylesheet" href="../style/transform3d.css"> <!-- Cho 3D -->
```



## Các Hiệu Ứng CSS

1. Hiệu ứng 2D (transform2d.css):

- Xoay (rotate): Áp dụng các hiệu ứng xoay phần tử theo trục Z.

- Phóng to/Thu nhỏ (scale): Thay đổi kích thước phần tử.

- Di chuyển (translate): Di chuyển phần tử theo trục X, Y hoặc cả hai.



2. Hiệu ứng 3D (transform3d.css):

- Xoay 3D (rotate3d): Xoay phần tử trong không gian 3 chiều.

- Di chuyển 3D (translate3d): Di chuyển phần tử trong không gian 3 chiều.

- Perspective: Áp dụng chiều sâu cho các phần tử 3D.



### Tùy Chỉnh

Bạn có thể thay đổi các giá trị trong các file CSS để thử các hiệu ứng khác nhau.

Để áp dụng một hiệu ứng mới, chỉ cần thêm lớp CSS thích hợp vào phần tử HTML và quan sát kết quả.



### Tài Liệu và Hỗ Trợ

MDN Web Docs - CSS Transforms - Tài liệu chính thức về các thuộc tính CSS transform.

CSS Tricks - A Complete Guide to CSS Transforms - Hướng dẫn chi tiết về các thuộc tính transform trong CSS.