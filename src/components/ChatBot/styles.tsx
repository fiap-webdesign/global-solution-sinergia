import styled from "styled-components";
import { BorderRadiuses, Colors, FontColors, Spaces } from "../../shared/DesignTokens";

export const ChatContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MessagesArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${Spaces.TWO};
`;

export const Message = styled.div<{ $isUser?: boolean }>`
  align-self: ${(p) => (p.$isUser ? "flex-end" : "flex-start")};
  background: ${(p) => (p.$isUser ? Colors.GREEN : "#ffffff")};
  color: ${(p) => (p.$isUser ? "#fff" : FontColors.PRIMARY)};
  padding: 8px 12px;
  border-radius: ${BorderRadiuses.ONE};
  border-bottom-left-radius: ${(p) => (p.$isUser ? BorderRadiuses.ONE : 0)};
  border-bottom-right-radius: ${(p) => (p.$isUser ? 0 : BorderRadiuses.ONE)};
  border: 1px solid #e4e7eb;
`;

export const InputArea = styled.form`
  display: flex;
  gap: ${Spaces.TWO};
  margin-top: ${Spaces.TWO};
`;

export const Input = styled.input`
  flex: 1;
  border-radius: ${BorderRadiuses.ONE};
  border: 1px solid #e4e7eb;
  width: 100%;
  padding: ${Spaces.ONE};
`;

export const SubmitButton = styled.button`
    background: ${Colors.DARK_GRAY};
    color: #FFF;
    padding: ${Spaces.ONE} ${Spaces.FOUR};
    border: 1px solid ${Colors.DARK_GRAY} !important;
    border-radius: ${BorderRadiuses.ONE};
    transition: ease-in-out 0.2s;

    &:hover {
        background-color: ${Colors.GRAY};
        color: ${Colors.DARK_GRAY};
    }
`;

export const QuickOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
`;

export const OptionButton = styled.button`
  background: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 14px;
  border: 1px solid #e4e7eb;

  &:hover {
    background: #d4d4d4;
  }
`;