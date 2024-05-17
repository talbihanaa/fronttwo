import styled from "styled-components";
import QuestionPage from "../views/QuestionsPage";

const QuestionStat = styled.div`
  text-align: center;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;
  margin-top: 7px;
`;

const StatNumber = styled.span`
  font-weight: bold;
`;

const StatText = styled.span`
  margin-top: 4px;
  font-size: 0.7rem;
  font-weight: 300;
`;

const QuestionTitleArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionLink = styled.a`
  text-decoration: none;
  color: #3ca4ff;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 3px;
  background-color: #3e4a52;
  color: #9cc3db;
  padding: 7px;
  border-radius: 4px;
`;

const StyleQuestionRow = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px 15px 10px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid;
`;

const WhoAndWhen = styled.div`
  display: inline-block;
  color: #aaa;
  margin-left: auto; 
  padding:10px 0;
`;

const UserLink = styled.a`
  color: #3ca4ff;
`;

function QuestionRow() {
  return (
    <StyleQuestionRow>
      <QuestionStat>
        <StatNumber>0</StatNumber>
        <StatText>votes</StatText>
      </QuestionStat>

      <QuestionStat>
        <StatNumber>1</StatNumber>
        <StatText>answer</StatText>
      </QuestionStat>

      <QuestionStat>
        <StatNumber>6</StatNumber>
        <StatText>views</StatText>
      </QuestionStat>

      <QuestionTitleArea>
        <QuestionLink>Getting string in quotes in JavaScript</QuestionLink>
        <WhoAndWhen>
          asked 2 mins ago <UserLink>Dawid</UserLink>
        </WhoAndWhen>

        <div>
          <Tag>javascript</Tag>
          <Tag>parsing</Tag>
          <Tag>quotes</Tag>
          <Tag>literals</Tag>
        </div>
      </QuestionTitleArea>
    </StyleQuestionRow>
   
  );
}

export default QuestionRow;
