import { createSelector } from "@reduxjs/toolkit";
const authSelf = (state: any) => state.auth;
export const tokenSelector = createSelector(authSelf, (authSelf) => authSelf.token);
