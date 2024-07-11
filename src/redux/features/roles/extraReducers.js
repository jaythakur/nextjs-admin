import { createRole, deleteRole, getRoles, updateRole } from './api';

export function extraReducersCallback(builder) {
  builder
    .addCase(createRole.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(createRole.fulfilled, (state, action) => {
      state.status = 'idle';
      state.roles.push(action.payload);
    });
  builder
    .addCase(getRoles.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getRoles.fulfilled, (state, action) => {
      state.status = 'idle';
      state.roles = action.payload;
    })
    .addCase(getRoles.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
      state.roles = [];
    });
  builder
    .addCase(updateRole.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(updateRole.fulfilled, (state, action) => {
      // Find the index of the item to be updated
      const index = state.roles.findIndex(
        (item) => item.roleId === action.payload.roleId
      );
      if (index !== -1) {
        // Update the item in the array
        state.status = 'idle';
        state.roles[index] = action.payload;
      }
    });
  builder
    .addCase(deleteRole.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(deleteRole.fulfilled, (state, action) => {
      // Find the index of the deleted item
      const index = state.roles.findIndex(
        (item) => item.roleId === action.payload
      );
      if (index !== -1) {
        // Remove the item from the array
        state.status = 'idle';
        state.roles.splice(index, 1);
      }
    });
}
