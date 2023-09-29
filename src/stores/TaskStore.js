import { defineStore } from "pinia"

//có thể đặt tên giá trị trả về của `defineStore()` bất cứ tên gì mik muốn vidu 'taskStore'
// defineStore : hàm thiết lập hoặc đối tượng Tùy chọn.
export const useTaskStore = defineStore("taskStore",{
    //test option stores
    //Tương tự như API tùy chọn của Vue, chúng ta cũng có thể chuyển Đối tượng tùy chọn với các thuộc tính 'state','actions', 'getter'
    //state: là hàm trở về trạng thái dữ liệu ban đầu của store
    state: () => ({
        tasks: [
            {id: 1, title: "Khong co tien mua ip 15", isFav: false},
            {id: 2, title: "MU lac quan nhat the gioi", isFav: true},
        ],
    }),
    //getters : la noi dinh nghia cac gia tri dc lay tu store 
    getters: {
        favs(){
            return this.tasks.filter(t => t.isFav);
        },
        favCount(){
            return this.tasks.reduce((p, c) =>{
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length;
        }
},
// Acitions : là nơi định nghĩa các hành động cập nhật state

    actions:{
        addTask(task){
            this.tasks.push(task);
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id !== id;
            })
        },
        toggeleFav(id){
            const task = this.tasks.filter(t => t.id === id);
            task.isFav = !task.isFav
        }
    }
})