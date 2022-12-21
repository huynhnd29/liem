import { Input } from "antd";
import styled from "styled-components";

export const AntdDesignWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputAntd = styled(Input)`
  width: 200px;
  background-color: red;
  input {
    background-color: red;
    color: red;
  }
`;
