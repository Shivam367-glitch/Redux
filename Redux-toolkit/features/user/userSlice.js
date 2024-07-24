<<<<<<< HEAD
const {createSlice,createAsyncThunk}=require("@reduxjs/toolkit");
const axios=require("axios");

const initialState={
    loading:false,
    users:[],
    error:''
} 



// createAsyncThunk will automatically create actions type for async action
const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        response.data.map((user)=>user.id);
    });
})


const userSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,state=>{
            state.loading=true;
        }),
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false; 
            state.users=action.payload;
            state.error=""
        }), 
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false;
            state.users=[];
            state.error=action.error.message;
        })
    }
})

module.exports=userSlice.reducer;
module.exports.userActions=fetchUsers;








=======
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: '',
};

// createAsyncThunk will automatically create actions type for async action
const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data.map((user) => user.id);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  }
});

module.exports = userSlice.reducer;
module.exports.userActions = { fetchUsers };
>>>>>>> a1880dd (integrated redux-toolkit in react js application)
