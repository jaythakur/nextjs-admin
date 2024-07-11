import { fetchStatusList } from './api';

export function extraReducersCallback(builder) {
  builder.addCase(fetchStatusList.fulfilled, (state, action) => {
    state.statusList = action.payload;
  });
}
