import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  padding: 40px ${(props) => (props.paddingSides ? props.paddingSides : "0px")};
`;

export { Container };
