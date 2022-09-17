import { counter } from "./slice";
import { createSelector } from "@reduxjs/toolkit";

const counterSeft = (state: any) => state.counter;

export const counterSelector = createSelector(counterSeft, (counterSeft: counter) => counterSeft.count);
