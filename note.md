#Java Script
##Callback Function
- What is Callback ? Là một Function, nó sẽ được thực thi khi một function khác đã được thực thi xong -> nó được gọi là callback (gọi lại)
- Why using Callback ? Bình thường trình duyệt hoặc máy khi đọc file JS thì sẽ đọc từ trên xuống, nên khi 1 hành động nào đó cần 1 khoảng thời gian thực hiện hệ thống sẽ chờ hành động đó hoàn thành rồi mới tiếp tục chương trình, vì vậy sẽ làm chậm việc đọc dữ liệu -> Sinh ra callback để trong quá trình thực thi 1 hành động nào đó cần thời gian sẽ vẫn có thể tiếp tục thực thi các lệnh tiếp theo mà không cần chờ
- Who using Callback ? Người sử dụng Callback bao gồm cả FrontEnd lẫn BackEnd để xử lý các hành động bất đồng bộ của hệ thống
- When using Callback ? Khi gặp một hành động nào đó cần 1 khoảng thời gian để thực thi và người dùng muốn trong lúc đó hệ thống vẫn sẽ tiếp tục thực thi các câu lệnh đằng sau cho tiết kiệm thời gian
- Example:
    ```javascript
    function doHomework(subject, callback) {
        alert(`Starting my ${subject} homework.`);
        callback();
    }

    doHomework("math", function () {
        alert("Finished my homework");
    })

    //Starting my math home work.
    //Finished my homework
    ```
- NOTE: 
    - Callback là 1 Function vì vậy khi dùng Callback thì giá trị truyền vào cho Callback là 1 Function, nếu truyền giá trị khác sẽ báo lỗi.
    - This trong Callback là Window. Vì vậy khi định nghĩa Callback trong 1 Object thì vẫn không thể truy cập đến dữ liệu của Object
##Promise Function
- What is Promise ? Promise là 1 đối tượng trong JS, giúp xử lý các tác vụ bất đồng bộ. Các lệnh tiếp theo sẽ không chờ đợi các công việc trước hoàn thành. 
- Why using Promise ? Để xử lý các tác vụ bất đồng bộ dễ dàng hơn, tránh gặp tình trạng các callback lồng nhau.
- When using Promise ? Khi 1 hoặc nhiều tác vụ cần thời gian để xử lý mà cần có tác vụ khác thực hiện ngay lúc đó
- Example:
```javascript

    function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const data = { name: 'John', age: 30 };
        if (data) {
            resolve(data);
        } else {
            reject('Failed to fetch data');
        }
        }, 2000);
    }
    );
    }

    fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
    //SAU 2 GIAY CONSOLE: { name: 'John', age: 30 }
```

- NOTE: 
    - Promise có 3 trạng thái: Pending, Fullfilled, Rejected. 
    - Xác định các hành động thực hiện khi Promise hoàn thành hoặc lỗi bằng các phương thức .then() và .catch(). hoặc try   {   } catch

    - Promise hoàn thành thành công, phương thức .then() được gọi với kết quả trả về là tham số đầu vào. Nếu Promise bị từ chối, phương thức .catch(error) được gọi với lỗi là tham số đầu vào. Thường sẽ console.log(error) để kiểm tra lỗi.

##Async/Await

- What is Async/Await ? Async/Await sẽ cho ta cách viết xử lý hàm bất đồng bộ như các hàm đồng bộ, làm cho việc lập trình bất đồng bộ sẽ dễ dàng honw
- Why using Async/Await ? Việc có các tác vụ có nhiều Promise làm việc xử lý bất đồng bộ xảy ra không theo 1 trình tự nào nên sử dụng Async/Await để làm cho việc xử lý bất đồng bộ dễ theo ý muốn của người lập trình hơn
- When using Async/Await ? Khi người lập trình muốn các tác vụ bất đồng bộ có thể xử lý theo 1 trình tự
- Example:
```javascript
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    }
    async function displayData() {
        const data = await fetchData();
        const container = document.getElementById('data-container');
        container.innerHTML = JSON.stringify(data);
    }
```
- NOTE: 
    - Chúng ta sử dụng từ khóa `await` để chọn hàm đợi
    - Từ khóa `async` sẽ được viết ở function cha gần nhất của `await`

<!-- ##ARRAY

- thường sử dụng Splice slice

javascript array cheatsheet(thuong dung) -->