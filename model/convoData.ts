const convoData = [

    {
        title: 'Impulse Spending',
        description: 'In this scenario, David and Emma have a conversation about impulse spending and their relationship dynamics.',
        category: 'Finance',
        unhealthyConvo: {
            convo: [
                {
                    name: "David", 
                    text: "Emma, seriously? Another shopping bag? How many times have I told you to stop spending our money like it's water?"
                },
                {
                    name: "Emma",
                    text: "Why are you always on my back? It's my money too! I work just as hard as you do. Why can't I treat myself once in a while?"
                },
                {
                    name: "David",
                    text: "Every week is not 'once in a while.' You have no control. It's like you're addicted to shopping or something."
                },
                {
                    name: "Emma",
                    text: "Oh, please. You spend money on your stupid hobbies too. But of course, that's different, right? Because it's 'you.'"
                },
                {
                    name: "David",
                    text: "At least I budget for my hobbies and don't blow money on pointless things. These bags will just end up in the back of your closet, forgotten."
                },
                {
                    name: "Emma",
                    text: "You're so judgmental! You act like you're so perfect. Maybe if you paid more attention to me, I wouldn't need to shop to feel better."
                },
                {
                    name: "David",
                    text: "So now it's my fault you can't control your spending? That's rich. You always find a way to make everything about you."
                },
                {
                    name: "Emma",
                    text: "Ugh, I can't even talk to you. Why do you always have to make me feel so small?"
                },
                {
                    name: "David",
                    text: "Maybe if you acted responsibly, I wouldn't have to."
                }
            ],
            breakdown: {
                header: "This conversation showcases several elements of an unhealthy conversation:",
                footer: "Effective communication involves active listening, expressing concerns without blame, and seeking understanding. In this scenario, neither David nor Emma effectively communicates their feelings or concerns, leading to a hostile and unproductive conversation.",
                points: [
                    {
                        pointTitle: "Blame and Accusations",
                        pointText: "Instead of addressing the issue directly, both parties resort to blaming each other."
                    },
                    {
                        pointTitle: "Defensiveness",
                        pointText: "Instead of listening, each person becomes defensive, further escalating the argument."
                    },
                    {
                        pointTitle: "Bringing Up Unrelated Issues",
                        pointText: "Emma diverts the conversation by mentioning David's hobbies and their relationship dynamics."
                    },
                    {
                        pointTitle: "Belittling",
                        pointText: "David's comments about Emma's spending habits are condescending, making her feel undervalued."
                    },
                    {
                        pointTitle: "Lack of Empathy",
                        pointText: "Neither party tries to understand the other's perspective or feelings."
                    }
                ]
            }
        },
        healthyConvo: {
            convo: [
                {
                    name: "David", 
                    text: "Hey Emma, I've noticed there have been quite a few shopping bags lately. I'm a bit concerned about our budget. Can we talk about it?"
                },
                {
                    name: "Emma",
                    text: "I understand why you'd be concerned. I've been doing a bit more shopping than usual lately. It's been a way for me to cope with some stress at work."
                },
                {
                    name: "David",
                    text: "I'm sorry to hear that you've been feeling stressed. Let's find a way to address both your feelings and our budget. I want to make sure we're on the same page financially."
                },
                {
                    name: "Emma",
                    text: "Thank you for understanding. I know I should be more mindful of our shared budget. Maybe we can set aside a specific amount for personal spending for both of us?"
                },
                {
                    name: "David",
                    text: "That sounds like a good idea. We can review our budget together and decide on an amount that works for both of us. And if you ever need to talk about work or anything else, I'm here for you."
                },
                {
                    name: "Emma",
                    text: "Thanks, David. I appreciate that. Let's sit down this weekend and go over our finances. And maybe we can also look into other ways for me to de-stress."
                },
                {
                    name: "David",
                    text: "Sounds like a plan. We'll tackle this together."
                }
            ],
            breakdown: {
                header: "This conversation showcases several elements of a healthy conversation:",
                points: [
                    {
                        pointTitle: "Openness",
                        pointText: "David initiates the conversation with genuine concern rather than accusations."
                    },
                    {
                        pointTitle: "Listening",
                        pointText: "Both David and Emma actively listen to each other's perspectives and feelings."
                    },
                    {
                        pointTitle: "Empathy",
                        pointText: "They express understanding and support for each other's concerns."
                    },
                    {
                        pointTitle: "Solution-Oriented",
                        pointText: "Instead of dwelling on the problem, they discuss potential solutions collaboratively."
                    },
                    {
                        pointTitle: "Mutual Respect",
                        pointText: "The tone of the conversation is respectful, and neither party belittles the other."
                    }
                ]
            }
        }
    },
    {
        title: 'Frugality and Extravagant',
        description: 'In this scenario, Emma and David discuss their contrasting views on financial frugality and enjoying life.',
        category: 'Finance',
        unhealthyConvo: {
            convo: [
                {
                    name: "Emma",
                    text: "David, why do you have to be such a penny-pincher all the time? It's like you're obsessed with saving every single cent."
                },
                {
                    name: "David",
                    text: "Why do you always criticize me? I'm just trying to be responsible with our money. Not everyone wants to waste money like you."
                },
                {
                    name: "Emma",
                    text: "It's not wasting! It's called enjoying life. You act like we're on the verge of bankruptcy every single day."
                },
                {
                    name: "David",
                    text: "Maybe if you understood the value of money and worked as hard as I do, you wouldn't be so quick to throw it away."
                },
                {
                    name: "Emma",
                    text: "Oh, so now you're saying I don't work hard? You're so condescending. I'm tired of feeling guilty every time I want to spend a bit."
                },
                {
                    name: "David",
                    text: "Well, maybe if you had some self-control, I wouldn't have to watch our finances like a hawk."
                },
                {
                    name: "Emma",
                    text: "You're impossible. It's like living with an old miser. I can't even remember the last time you treated yourself, or me for that matter."
                },
                {
                    name: "David",
                    text: "Maybe I would if I wasn't always worried about you emptying our bank account."
                }
            ],
            breakdown: {
                header: "This simulation demonstrates several elements of an unhealthy conversation:",
                points: [
                    {
                        pointTitle: "Name-calling and Accusations",
                        pointText: "Both parties resort to name-calling ('penny-pincher,' 'old miser') and make accusations."
                    },
                    {
                        pointTitle: "Defensiveness",
                        pointText: "David becomes defensive about his frugality, leading to further escalation."
                    },
                    {
                        pointTitle: "Comparing Contributions",
                        pointText: "David implies that he works harder, belittling Emma's contributions."
                    },
                    {
                        pointTitle: "Generalizations",
                        pointText: "Phrases like 'always' and 'every time' exaggerate the situation and intensify the argument."
                    },
                    {
                        pointTitle: "Lack of Listening",
                        pointText: "Neither David nor Emma actively listens to the other's concerns, leading to a cycle of blame."
                    }
                ]
            }
        },
        healthyConvo: {
            convo: [
                {
                    name: "Emma",
                    text: "David, I've been feeling a bit restricted with our finances lately. I understand the importance of saving, but sometimes it feels like we're not allowing ourselves to enjoy the present. Can we discuss this?"
                },
                {
                    name: "David",
                    text: "I appreciate you bringing this up, Emma. I know I can be quite cautious with money. It's just that I want to ensure we're secure in the future. But I also want to hear your feelings and find a balance."
                },
                {
                    name: "Emma",
                    text: "I completely understand wanting to be secure. I want that too. But maybe we could occasionally treat ourselves or have experiences without feeling guilty? I miss those spontaneous moments."
                },
                {
                    name: "David",
                    text: "I see where you're coming from. Maybe we've swung too far towards being frugal. Let's figure out a way to allocate a portion of our budget for leisure and unexpected treats. Does that sound okay?"
                },
                {
                    name: "Emma",
                    text: "That sounds like a great idea. We can set aside a specific amount each month. And I also want to acknowledge your efforts in managing our finances. I know it comes from a place of care."
                },
                {
                    name: "David",
                    text: "Thank you, Emma. I value your perspective, and I want us to be on the same page. Let's find a way to enjoy the present while also preparing for the future."
                }
            ],
            breakdown: {
                header: "In this healthy conversation:",
                points: [
                    {
                        pointTitle: "Constructive Approach",
                        pointText: "Emma begins the conversation by expressing her feelings without placing blame."
                    },
                    {
                        pointTitle: "Active Listening",
                        pointText: "David listens to Emma's concerns and acknowledges her perspective."
                    },
                    {
                        pointTitle: "Understanding",
                        pointText: "Both recognize the importance of the other's viewpoint and seek to understand each other's feelings."
                    },
                    {
                        pointTitle: "Collaboration",
                        pointText: "They work together to find a solution that addresses both of their concerns."
                    },
                    {
                        pointTitle: "Affirmation",
                        pointText: "They both acknowledge and appreciate each other's efforts and intentions."
                    }
                ]
            }
        }
    },
    {
        title: 'Spending prioritization',
        description: 'In this scenario, David and Emma discuss their financial priorities, specifically vacationing versus buying a house.',
        category: 'Finance',
        unhealthyConvo: {
            convo: [
                {
                    name: "David", 
                    text: "Emma, I saw that you were looking at those luxury vacation packages again. We can't afford that right now. We need to think about buying a house."
                },
                {
                    name: "Emma",
                    text: "Oh, so now you're spying on me? Just because you're obsessed with buying a house doesn't mean we can't enjoy ourselves once in a while."
                },
                {
                    name: "David",
                    text: "Why can't you be practical for once? A house is an investment. A vacation is just throwing money away."
                },
                {
                    name: "Emma",
                    text: "You're such a buzzkill. All you think about is the future, future, future. Maybe I want to live in the now. Not everyone wants to be stuck in one place with a mortgage."
                },
                {
                    name: "David",
                    text: "If you weren't so busy dreaming of unrealistic vacations, maybe we'd have a house by now."
                },
                {
                    name: "Emma",
                    text: "You always find a way to make everything my fault. Maybe if you earned more, we could afford both!"
                },
                {
                    name: "David",
                    text: "Oh, great, now you're attacking my income? Why don't you just admit that you're careless with money?"
                },
                {
                    name: "Emma",
                    text: "I can't even talk to you when you're like this. Everything is always about what 'David wants.'"
                }
            ],
            breakdown: {
                header: "This conversation exhibits several characteristics of an unhealthy dialogue:",
                points: [
                    {
                        pointTitle: "Jumping to Conclusions",
                        pointText: "David assumes Emma's intentions without asking her directly."
                    },
                    {
                        pointTitle: "Defensiveness",
                        pointText: "Emma becomes defensive, leading to further escalation."
                    },
                    {
                        pointTitle: "Name-Calling and Accusations",
                        pointText: "Phrases like 'buzzkill' and 'careless' are thrown around, worsening the tension."
                    },
                    {
                        pointTitle: "Avoidance",
                        pointText: "Instead of addressing the issue at hand, they divert to other topics, like David's income."
                    },
                    {
                        pointTitle: "Blame",
                        pointText: "Both parties shift blame to the other without taking responsibility for their feelings or actions."
                    }
                ]
            }
        },
        healthyConvo: {
            convo: [
                {
                    name: "David", 
                    text: "Emma, I noticed you were looking at some vacation packages. They look really exciting. I've been thinking about our future and the possibility of getting a house. Can we discuss how we want to prioritize our big expenses?"
                },
                {
                    name: "Emma",
                    text: "I'm glad you brought it up, David. I was looking at those vacations as a dream getaway. But I understand the importance of having our own place. Maybe we can find a way to plan for both?"
                },
                {
                    name: "David",
                    text: "I'd love that. I value our experiences together, and a vacation would be wonderful. I just want to make sure we're also setting ourselves up for the future. How about we set a timeline for the house and see where we can fit in a vacation?"
                },
                {
                    name: "Emma",
                    text: "That sounds like a balanced approach. We can allocate a budget for the vacation and also save for the down payment on the house. It's important for me that we create memories while also building a foundation for our future."
                },
                {
                    name: "David",
                    text: "I completely agree. Let's sit down, review our finances, and set some goals. And thanks for understanding my concerns, Emma."
                },
                {
                    name: "Emma",
                    text: "Of course, David. I appreciate you being open to discussing this and valuing our experiences together."
                }
            ],
            breakdown: {
                header: "This conversation showcases several elements of a healthy conversation:",
                points: [
                    {
                        pointTitle: "Open Dialogue",
                        pointText: "David initiates the conversation in a non-confrontational manner, expressing his observations and concerns."
                    },
                    {
                        pointTitle: "Active Listening",
                        pointText: "Both Emma and David actively listen and acknowledge each other's perspectives."
                    },
                    {
                        pointTitle: "Constructive Approach",
                        pointText: "They discuss potential solutions and work collaboratively to address both of their desires."
                    },
                    {
                        pointTitle: "Shared Vision",
                        pointText: "Both recognize the importance of experiences and future planning, working towards a mutual goal."
                    },
                    {
                        pointTitle: "Appreciation",
                        pointText: "They express gratitude for each other's understanding and willingness to compromise."
                    }
                ]
            }
        }
    },
    {
        title: 'Work-Life Balance',
        description: 'In this scenario, Emma and David discuss the impact of David\'s work hours on their relationship.',
        category: 'Quality Time',
        unhealthyConvo: {
            convo: [
                {
                    name: "Emma", 
                    text: "David, are you seriously staying late at work again? It feels like you're avoiding me."
                },
                {
                    name: "David",
                    text: "Why do you always assume the worst? Just because I have to work doesn't mean I'm avoiding you."
                },
                {
                    name: "Emma",
                    text: "It's just that every time I think we might spend an evening together, you're always too busy with work."
                },
                {
                    name: "David",
                    text: "You're so dramatic. Not everything is about you. I have responsibilities, you know."
                },
                {
                    name: "Emma",
                    text: "I get that you have responsibilities, but it's like you don't even want to spend time with me anymore."
                },
                {
                    name: "David",
                    text: "Stop being so clingy. If you had more going on in your life, maybe you wouldn't be so obsessed with mine."
                },
                {
                    name: "Emma",
                    text: "I can't believe you'd say that. All I want is a bit of your time, but apparently, that's too much to ask."
                }
            ],
            breakdown: {
                header: "In this unhealthy conversation:",
                points: [
                    {
                        pointTitle: "Assumptions",
                        pointText: "Emma jumps to conclusions about David's intentions without having a clear understanding."
                    },
                    {
                        pointTitle: "Dismissiveness",
                        pointText: "David dismisses Emma's feelings and concerns instead of addressing them directly."
                    },
                    {
                        pointTitle: "Defensiveness",
                        pointText: "Both parties become defensive, leading to further escalation of the argument."
                    },
                    {
                        pointTitle: "Name-Calling",
                        pointText: "David uses terms like \"dramatic\" and \"clingy,\" which belittle Emma's feelings."
                    },
                    {
                        pointTitle: "Avoidance",
                        pointText: "Neither David nor Emma effectively communicates their needs or seeks a compromise, leading to a circular and unproductive conversation."
                    }
                ]
            }
        },
        healthyConvo: {
            convo: [
                {
                    name: "Emma", 
                    text: "David, I noticed you've been working late quite a bit lately. I was hoping we could spend some time together tonight. How's work been?"
                },
                {
                    name: "David",
                    text: "I appreciate you bringing it up, Emma. There's been a lot on my plate at work, and I've had to put in some extra hours. I truly value our time together, and I don't want you to feel neglected."
                },
                {
                    name: "Emma",
                    text: "Thanks for sharing that with me. I understand work can be demanding. I just miss our evenings together, and I want to make sure we still prioritize our relationship."
                },
                {
                    name: "David",
                    text: "I completely agree. How about we set aside some dedicated time this weekend? Maybe a date night? And I'll make an effort to better manage my work hours during the week."
                },
                {
                    name: "Emma",
                    text: "That sounds lovely. I appreciate you finding a balance. Just know that I'm here to support you, and if you ever need to talk about work or anything else, I'm here."
                },
                {
                    name: "David",
                    text: "Thank you, Emma. Your understanding means a lot to me. Let's make sure we always communicate and keep our bond strong."
                }
            ],
            breakdown: {
                header: "In this healthy conversation:",
                points: [
                    {
                        pointTitle: "Open Dialogue",
                        pointText: "Emma initiates the conversation with understanding, expressing her feelings without placing blame."
                    },
                    {
                        pointTitle: "Active Listening",
                        pointText: "Both David and Emma actively listen to each other's perspectives."
                    },
                    {
                        pointTitle: "Valuing the Relationship",
                        pointText: "They express the importance of their relationship and prioritize their bond."
                    },
                    {
                        pointTitle: "Seeking Solutions",
                        pointText: "They collaboratively discuss ways to ensure they spend quality time together."
                    },
                    {
                        pointTitle: "Mutual Support",
                        pointText: "Both parties offer support and understanding, strengthening their connection."
                    }
                ]
            }
        }
    },
    {
        title: 'Miscommunication',
        description: 'In this scenario, Emma and David navigate a miscommunication regarding plans they made for the weekend.',
        category: 'Communication',
        unhealthyConvo: {
            convo: [
                {
                    name: "Emma",
                    text: "David, I thought we agreed to go hiking this weekend. Why did you make plans with your friends?"
                },
                {
                    name: "David",
                    text: "I never confirmed anything, Emma. Why do you always have to jump to conclusions?"
                },
                {
                    name: "Emma",
                    text: "We talked about it last week. You never listen to me."
                },
                {
                    name: "David",
                    text: "You're always so quick to blame me. Maybe you should be clearer next time."
                },
                {
                    name: "Emma",
                    text: "I can't believe you're turning this on me. You just don't care about our plans."
                },
                {
                    name: "David",
                    text: "You're overreacting. I have a life outside of us, you know."
                }
            ],
            breakdown: {
                header: "In this variation:",
                points: [
                    {
                        pointTitle: "Jumping to Conclusions",
                        pointText: "Emma immediately assumes David intentionally overlooked their plans."
                    },
                    {
                        pointTitle: "Defensiveness",
                        pointText: "David becomes defensive and doesn't acknowledge the miscommunication."
                    },
                    {
                        pointTitle: "Blame",
                        pointText: "Both parties blame each other without attempting to understand the root of the miscommunication."
                    },
                    {
                        pointTitle: "Invalidation",
                        pointText: "David invalidates Emma's feelings by suggesting she's overreacting."
                    },
                    {
                        pointTitle: "Lack of Understanding",
                        pointText: "Neither party seeks to understand the other's perspective, leading to an escalated argument."
                    }
                ]
            }
        },
        healthyConvo: {
            convo: [
                {
                    name: "Emma",
                    text: "David, I thought we had plans to go hiking this weekend. I was a bit surprised when I heard you made other plans. Can we talk about it?"
                },
                {
                    name: "David",
                    text: "I'm sorry, Emma. I must have misunderstood. I thought we were still deciding. I should have checked with you before making other plans."
                },
                {
                    name: "Emma",
                    text: "Thanks for understanding. In the future, can we make sure to confirm plans so we avoid miscommunications?"
                },
                {
                    name: "David",
                    text: "Absolutely. I value our time together, and I don't want any miscommunication to come between us."
                },
                {
                    name: "Emma",
                    text: "I appreciate that, David. Let's find another date for our hiking trip. I'm sure we can work this out."
                },
                {
                    name: "David",
                    text: "Sounds like a plan. Thank you for addressing this calmly. It's important we keep our communication lines open."
                }
            ],
            breakdown: {
                header: "In this healthy conversation:",
                points: [
                    {
                        pointTitle: "Open Dialogue",
                        pointText: "Emma addresses the issue without placing blame, fostering an open dialogue."
                    },
                    {
                        pointTitle: "Acknowledgement",
                        pointText: "David acknowledges the oversight and apologizes for the miscommunication."
                    },
                    {
                        pointTitle: "Seeking Solutions",
                        pointText: "Emma suggests a proactive approach to avoid similar miscommunications in the future."
                    },
                    {
                        pointTitle: "Value of Relationship",
                        pointText: "David emphasizes the importance of their relationship and the need for clear communication."
                    },
                    {
                        pointTitle: "Collaborative Approach",
                        pointText: "Both parties work together to find a solution and prioritize their relationship."
                    }
                ]
            }
        }
    },
    {
        title: 'Jealousy and Trust Issues',
        description: 'In this scenario, Emma feels jealous and insecure when she sees David talking to another person frequently. Their communication delves into the depth of trust and insecurities in their relationship.',
        category: 'Trust & Jealousy',
        unhealthyConvo: {
            convo: [
                {
                    name: "Emma",
                    text: "David, why are you always talking to Alex? Are you hiding something from me?"
                },
                {
                    name: "David",
                    text: "Why are you always so paranoid? I can't even talk to a friend without you getting all suspicious."
                },
                {
                    name: "Emma",
                    text: "You're always on your phone texting them. It feels like you're keeping secrets."
                },
                {
                    name: "David",
                    text: "You're just being overly jealous. You need to trust me more."
                },
                {
                    name: "Emma",
                    text: "Maybe if you weren't so secretive, I wouldn't feel this way."
                },
                {
                    name: "David",
                    text: "I can't deal with your insecurities. You need to figure them out."
                }
            ],
            breakdown: {
                header: "In this unhealthy variation:",
                points: [
                    {
                        pointTitle: "Accusations",
                        pointText: "Emma immediately accuses David of hiding something, leading to a defensive response."
                    },
                    {
                        pointTitle: "Defensiveness",
                        pointText: "David dismisses Emma's feelings and labels her as paranoid."
                    },
                    {
                        pointTitle: "Lack of Trust",
                        pointText: "Emma's suspicions suggest a deeper trust issue in their relationship."
                    },
                    {
                        pointTitle: "Invalidation",
                        pointText: "David invalidates Emma's feelings by labeling them as mere insecurities."
                    },
                    {
                        pointTitle: "Avoidance",
                        pointText: "Neither party seeks to genuinely understand the root of the issue, leading to further misunderstanding."
                    }
                ]
            }
        },
        healthyConvo: {
            convo: [
                {
                    name: "Emma",
                    text: "David, I've noticed you've been talking to Alex quite frequently. It's making me feel a bit insecure. Can we discuss it?"
                },
                {
                    name: "David",
                    text: "I'm sorry you feel that way, Emma. Alex and I have been working on a project together. I should've communicated that to you."
                },
                {
                    name: "Emma",
                    text: "Thank you for clarifying. I trust you, but sometimes my insecurities get the best of me."
                },
                {
                    name: "David",
                    text: "I understand, Emma. I'll make sure to be more open in the future. Your feelings are important to me."
                },
                {
                    name: "Emma",
                    text: "Thank you, David. I appreciate you being understanding. Let's work on our communication together."
                },
                {
                    name: "David",
                    text: "Absolutely. Trust and understanding are crucial in our relationship. Let's always keep the lines of communication open."
                }
            ],
            breakdown: {
                header: "In this healthy conversation:",
                points: [
                    {
                        pointTitle: "Open Expression",
                        pointText: "Emma expresses her feelings without placing immediate blame, leading to constructive dialogue."
                    },
                    {
                        pointTitle: "Transparency",
                        pointText: "David explains the situation and acknowledges the importance of communication."
                    },
                    {
                        pointTitle: "Acknowledgement",
                        pointText: "Emma acknowledges her own feelings and insecurities, promoting understanding."
                    },
                    {
                        pointTitle: "Valuing Feelings",
                        pointText: "David emphasizes the importance of Emma's feelings and promises to be more transparent."
                    },
                    {
                        pointTitle: "Mutual Effort",
                        pointText: "Both parties agree on the importance of open communication and working together to maintain trust."
                    }
                ]
            }
        }
    }
    
    
    
    
    
    
]

export default convoData