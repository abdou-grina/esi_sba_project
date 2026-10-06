
import { icons } from "../../assets/images/icons/icons";
import "./LeaderBoard.css"

function LeaderBoard({topUsers}){
    const Users = icons.Users;
    const Crown = icons.Crown;
    return(
        <div className="leaderboard">
            <div className="leaderboardtitle">
                <Users size={30} strokeWidth={1.5} color="white"/>
                <span>قائمة المتصدرين</span>
            </div>
            {topUsers.map((user) => (
                <div className="user">
                    
                    <div className="icon-container">
                        <Crown size={30} strokeWidth={1.5} color="white"/>
                    </div>

                    <div className="proprities">
                        <div className="infos">

                            <div className="profile">
                                <div className="avatar">{user.name[0]}</div>
                                <span>{user.name}<br />{user.solverexos} تمرين</span>              
                            </div>

                            <span className="points">{user.xp}نقطة</span>

                        </div>

                        <div className="xp">
                            <div style={{height:'100%', width:`${(user.solverexos)}%`, backgroundColor: "#FBBF24", borderRadius:"30px"}}/>
                        </div>

                    </div>

                </div>
                
            ))}
        </div>
    );
}

export default LeaderBoard;