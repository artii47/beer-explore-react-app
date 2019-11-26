import React, { Component } from "react";
import * as S from "./ErrorBoundary.styles";

export default class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <S.ErrorBoundaryOverlay>
          Something went wrong
          <S.ErrorBoundaryImage imageUrl="https://i.imgur.com/yW2W9SC.png" />
        </S.ErrorBoundaryOverlay>
      );
    }
    return this.props.children;
  }
}
