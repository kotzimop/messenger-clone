import getConversations from "../actions/getConversations";
import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";
import getUsers from "../actions/getUsers";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const conversations = await getConversations()
    const users = await getUsers()
  return (
    // @ts-expect-error Server Component
    <SideBar>
      <div className="h-full">
        <ConversationList 
        users={users}
        initialItems={conversations}
        />
        {children}
        </div>
    </SideBar>
  );
}
