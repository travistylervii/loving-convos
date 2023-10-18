"use client";

import { useState, useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const unhealthyconvoTestData = "{\n \"convo\": [\n {\n \"name\": \"Emma\",\n \"text\": \"David, why can't you take the trash out more often? I'm always the one doing it.\"\n },\n {\n \"name\": \"David\",\n \"text\": \"Why are you always nagging me? I do it when I can.\"\n },\n {\n \"name\": \"Emma\",\n \"text\": \"But David, I feel like I'm doing all the chores around the house, it's not fair.\"\n },\n {\n \"name\": \"David\",\n \"text\": \"You're just always complaining about everything. You're never happy.\"\n },\n {\n \"name\": \"Emma\",\n \"text\": \"Maybe if you would show you care about our shared responsibilities, I wouldn't be upset.\"\n },\n {\n \"name\": \"David\",\n \"text\": \"It's not my fault if you always feel disrespected over small things.\"\n }\n ],\n \"breakdown\": {\n \"points\": [\n {\n \"pointTitle\": \"Criticism\",\n \"pointText\": \"Emma criticizes David's lack of helping with chores, which can create defensiveness.\"\n },\n {\n \"pointTitle\": \"Defensiveness\",\n \"pointText\": \"David refutes Emma's feelings and claims, which escalates the tension further.\"\n },\n {\n \"pointTitle\": \"Dismissal\",\n \"pointText\": \"David dismisses Emma's frustrations as 'small things', invalidating her feelings.\"\n },\n {\n \"pointTitle\": \"Lack of Empathy\",\n \"pointText\": \"Neither David nor Emma are showing empathy towards each other's feelings and viewpoints.\"\n },\n {\n \"pointTitle\": \"Unresolved Conflict\",\n \"pointText\": \"Instead of working to a resolution, both parties argue and dismiss each other's feelings.\"\n }\n ],\n \"summary\": \"The conversation between Emma and David shows several unhealthy communication habits, such as criticism, defensiveness, dismissal, lack of empathy, and unresolved conflict. A healthier approach would involve listening, understanding, and resolving the conflict together.\"\n }\n}"

const healthyconvoTestData = "{\n \"convo\": [\n {\n \"name\": \"Emma\",\n \"text\": \"David, I've noticed that you don't take out the trash as often as I do. I'm feeling a bit overwhelmed with doing the house chores, can we discuss it?\"\n },\n {\n \"name\": \"David\",\n \"text\": \"I'm sorry you're feeling that way, Emma. I didn't realize that it was putting so much pressure on you. Let's find a way to share the chores more equally.\"\n },\n {\n \"name\": \"Emma\",\n \"text\": \"Thank you for understanding, David. It's not about the trash itself, but about feeling like I do more chores and that my efforts are taken for granted.\"\n },\n {\n \"name\": \"David\",\n \"text\": \"I understand, Emma. I'll try to pitch in more with the chores. Your efforts and feelings matter to me.\"\n },\n {\n \"name\": \"Emma\",\n \"text\": \"Thank you, David. Let's make a plan on how we can divide the chores equally.\"\n },\n {\n \"name\": \"David\",\n \"text\": \"Absolutely. It's crucial we share responsibilities in our relationship. We'll divide the chores fairly.\"\n }\n ],\n \"breakdown\": {\n \"points\": [\n {\n \"pointTitle\": \"Expessing Feelings\",\n \"pointText\": \"Emma voices her feelings without blame, creating a space for open dialogue.\"\n },\n {\n \"pointTitle\": \"Apology & Problem-Solving\",\n \"pointText\": \"David acknowledges Emma's feelings, apologizes and suggests a possible solution.\"\n },\n {\n \"pointTitle\": \"Clarifying the Issue\",\n \"pointText\": \"Emma explains the underlying issue, promoting mutual understanding and addressing the core problem.\"\n },\n {\n \"pointTitle\": \"Valuing Feelings & Efforts\",\n \"pointText\": \"David assures Emma that her efforts and feelings are valued, promising to contribute more to house chores.\"\n },\n {\n \"pointTitle\": \"Solution Oriented\",\n \"pointText\": \"Both parties discuss a practical plan for dividing chores, addressing the problem at hand.\"\n }\n ],\n \"summary\": \"In conclusion, the breakdown of Emma and David's conversation emphasizes the importance of expressing feelings, acknowledging these feelings and arriving at solutions. Emma approaches the situation without throwing blame, and David promptly acknowledges the problem and expresses his willingness to help. The conversation concludes with the couple agreeing on a plan to ensure chores are distributed equally, showing their mutual commitment to resolving the issue.\"\n }\n}"

type Props = {
  scenarioData: FormScenarioData
}

const ConvoDisplay = (props:Props) => {

  const { scenarioData } = props;
  const {title, description, unhealthyconvo, healthyconvo} = scenarioData

  const [previewData, setPreviewData] = useState({
    title: 'Example Conversation',
    description: 'This is an example conversation between David and Emma about taking out the trash.',
    category: 'Acts of service',
    unhealthyconvo: JSON.parse(unhealthyconvoTestData),
    healthyconvo: JSON.parse(healthyconvoTestData),
  })

  useEffect(() => {

    if(unhealthyconvo !== '' && healthyconvo !== '') {
      
      setPreviewData({
        title,
        description,
        category: '',
        unhealthyconvo,
        healthyconvo,
      })
    }

  },[title, description, unhealthyconvo, healthyconvo])


  return (
    <>
        <h1 className="text-2xl text-center mb-2">{previewData.title}</h1>
        <p className="text-center mb-3">{previewData.description}</p>
      <div className="grid grid-cols-2 divide-x divide-slate-300 border border-slate-200 p-10 rounded-md">
        <div className="col-span-1 px-6">
          <AiOutlineClose size={50} className="mx-auto mb-5 text-rose-400" />
          <h3 className="text-center text-3xl font-bold mb-6 text-rose-400">
            Unhealthy Conversation
          </h3>

          <ul>
            {previewData.unhealthyconvo.convo.map((message: Convo, i: number) => {
              if (message.name === "David") {
                return (
                
                    <li key={i} className="my-2">
                      <div className="pt-3 pb-4 px-4 bg-blue-400 rounded-lg text-white text-left mr-10">
                        {message.text}
                      </div>
                      <div className="flex gap-2 items-center -mt-2 ml-3">
                        <img
                          src="../david-mad.png"
                          className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white shadow-sm shadow-slate-300"
                        />
                        <div className="text-sm font-bold">{message.name}</div>
                      </div>
                    </li>
                
                );
              } else {
                return (
                
                    <li key={i} className="my-2">
                      <div className="pt-3 pb-4 pr-4 px-4 bg-pink-400 rounded-lg text-white text-right ml-10">
                        {message.text}
                      </div>
                      <div className="flex gap-2 items-center justify-end -mt-2 m-3">
                        <div className="text-sm font-bold">{message.name}</div>
                        <img
                          src="../emma-mad.png"
                          className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white shadow-sm shadow-slate-300"
                        />
                      </div>
                    </li>
                
                );
              }
            })}
          </ul>

          <hr className="my-8" />
          <div className="text-sm">
            <h4 className="text-lg leading-6 font-bold">
            This conversation showcases several elements of an unhealthy conversation:
            </h4>
            <ul className="list-disc pl-5">
              {previewData.unhealthyconvo.breakdown.points.map((point: Points, i: number) => {
                return (
                
                    <li key={i} className="my-2">
                      <strong>{point.pointTitle}: </strong>
                      {point.pointText}
                    </li>
               
                );
              })}
            </ul>
            <p>
              {previewData.unhealthyconvo.breakdown.summary &&
                previewData.unhealthyconvo.breakdown.summary}
            </p>
          </div>
        </div>
        <div className="col-span-1 px-6">
          <IoMdCheckmarkCircleOutline
            size={50}
            className="mx-auto mb-5 text-emerald-400"
          />
          <h3 className="text-center text-3xl font-bold mb-6 text-emerald-500">
            Healthy Conversation
          </h3>

          <ul>
            {previewData.healthyconvo.convo.map((message: Convo, i: number) => {
              if (message.name === "David") {
                return (
                
                    <li key={i} className="my-2">
                      <div className="pt-3 pb-4 px-4 bg-blue-400 rounded-lg text-white text-left mr-10">
                        {message.text}
                      </div>
                      <div className="flex gap-2 items-center -mt-2 ml-3">
                        <img
                          src="../david-mad.png"
                          className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white shadow-sm shadow-slate-300"
                        />
                        <div className="text-sm font-bold">{message.name}</div>
                      </div>
                    </li>
                 
                );
              } else {
                return (
              
                    <li key={i} className="my-2">
                      <div className="pt-3 pb-4 pr-4 px-4 bg-pink-400 rounded-lg text-white text-right ml-10">
                        {message.text}
                      </div>
                      <div className="flex gap-2 items-center justify-end -mt-2 m-3">
                        <div className="text-sm font-bold">{message.name}</div>
                        <img
                          src="../emma-mad.png"
                          className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white shadow-sm shadow-slate-300"
                        />
                      </div>
                    </li>
            
                );
              }
            })}
          </ul>

          <hr className="my-8" />
          <div className="text-sm">
            <h4 className="text-lg leading-6 font-bold">
            This conversation showcases several elements of a healthy conversation:
            </h4>
            <ul className="list-disc pl-5">
              {previewData.healthyconvo.breakdown.points.map((point: Points, i: number) => {
                return (
                 
                    <li key={i} className="my-2">
                      <strong>{point.pointTitle}: </strong>
                      {point.pointText}
                    </li>
            
                );
              })}
            </ul>
            <p>
              {previewData.healthyconvo.breakdown.summary && previewData.healthyconvo.breakdown.summary}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConvoDisplay;
