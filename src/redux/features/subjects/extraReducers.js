import {
  createSubject,
  deleteSubject,
  fetchSubjects,
  updateSubject,
} from './api';

export function extraReducersCallback(builder) {
  builder.addCase(fetchSubjects.fulfilled, (state, action) => {
    state.subjects = action.payload;
  });
  builder
    .addCase(updateSubject.pending, (state) => {
      state.status = 'pending';
      state.loading = true;
    })
    .addCase(updateSubject.fulfilled, (state, action) => {
      state.status = 'idle';
      state.loading = false;
      state.subjects = action.payload;
    })
    .addCase(updateSubject.rejected, (state, action) => {
      state.status = 'rejected';
      state.loading = false;
      state.error = action.payload;
    });
  builder
    .addCase(createSubject.pending, (state) => {
      state.status = 'pending';
      state.loading = true;
    })
    .addCase(createSubject.fulfilled, (state, action) => {
      state.error = {};
      state.status = 'idle';
      state.loading = false;
      state.subjects = action.payload;
    })
    .addCase(createSubject.rejected, (state, action) => {
      state.status = 'rejected';
      state.loading = false;
      state.error = action.payload;
    });
  builder
    .addCase(deleteSubject.fulfilled, (state, action) => {
      state.error = {};
      state.status = 'idle';
      state.loading = false;
      state.subjects = action.payload;
    })
    .addCase(deleteSubject.rejected, (state, action) => {
      state.status = 'rejected';
      state.loading = false;
      state.error = action.payload;
    });
}
