import {
  createUser,
  deleteUser,
  doLogin,
  fetchUsers,
  getUserDetail,
  updatePassword,
  updateProfile,
} from './api';

export function extraReducersCallback(builder) {
  builder.addCase(fetchUsers.fulfilled, (state, action) => {
    state.users = action.payload;
  });
  builder
    .addCase(doLogin.pending, (state) => {
      state.status = 'pending';
      state.loading = true;
    })
    .addCase(doLogin.fulfilled, (state, action) => {
      state.status = 'idle';
      state.loading = false;
      state.accessToken = action.payload.accessToken;
      state.sessionId = action.payload.sessionId;
    })
    .addCase(doLogin.rejected, (state, action) => {
      state.status = 'rejected';
      state.loading = false;
      state.error = action.payload;
    });
  builder
    .addCase(getUserDetail.pending, (state) => {
      state.status = 'pending';
      state.loading = true;
    })
    .addCase(getUserDetail.fulfilled, (state, action) => {
      state.status = 'idle';
      state.loading = false;
      state.currentUser = action.payload;
    })
    .addCase(getUserDetail.rejected, (state, action) => {
      state.status = 'rejected';
      state.loading = false;
      state.error = action.payload;
    });
  builder
    .addCase(updateProfile.pending, (state) => {
      state.status = 'pending';
      state.loading = true;
    })
    .addCase(updateProfile.fulfilled, (state, action) => {
      state.status = 'idle';
      state.loading = false;
      state.currentUser = action.payload;
    })
    .addCase(updateProfile.rejected, (state, action) => {
      state.status = 'rejected';
      state.loading = false;
      state.error = action.payload;
    });
  builder
    .addCase(updatePassword.pending, (state) => {
      state.status = 'pending';
      state.loading = true;
    })
    .addCase(updatePassword.fulfilled, (state, action) => {
      state.error = {};
      state.status = 'idle';
      state.loading = false;
    })
    .addCase(updatePassword.rejected, (state, action) => {
      state.status = 'rejected';
      state.loading = false;
      state.error = action.payload;
    });
  builder
    .addCase(createUser.pending, (state) => {
      state.status = 'pending';
      state.loading = true;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.error = {};
      state.status = 'idle';
      state.loading = false;
    })
    .addCase(createUser.rejected, (state, action) => {
      state.status = 'rejected';
      state.loading = false;
      state.error = action.payload;
    });
  builder
    .addCase(deleteUser.fulfilled, (state, action) => {
      state.error = {};
      state.status = 'idle';
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(deleteUser.rejected, (state, action) => {
      state.status = 'rejected';
      state.loading = false;
      state.error = action.payload;
    });
}
