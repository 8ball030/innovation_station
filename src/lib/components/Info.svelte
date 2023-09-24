<script>
 import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
</script>

<div class="info">
 <Accordion>
  <AccordionItem open>
   <svelte:fragment slot="lead">*</svelte:fragment>
   <svelte:fragment slot="summary">How it works</svelte:fragment>
   <svelte:fragment slot="content"
    >Components can be composed together into one system</svelte:fragment
   >
  </AccordionItem>
  <AccordionItem>
   <svelte:fragment slot="lead">*</svelte:fragment>
   <svelte:fragment slot="summary">Protocol</svelte:fragment>
   <svelte:fragment slot="content"
    >Protocols define agent-to-agent as well as component-to-component
    interactions within AEAs. As such, they include: Messages defining the
    syntax of messages; Serialization defining how a Message is encoded for
    transport; and, optionally Dialogues, which define rules over Message
    sequences.
   </svelte:fragment>
  </AccordionItem>
  <AccordionItem>
   <svelte:fragment slot="lead">*</svelte:fragment>
   <svelte:fragment slot="summary">Skill</svelte:fragment>
   <svelte:fragment slot="content"
    >Skills are the core focus of the framework's extensibility as they
    implement business logic to deliver economic value for the AEA. They are
    self-contained capabilities that AEAs can dynamically take on board, in
    order to expand their effectiveness in different situations. A Skill
    encapsulates implementations of the three abstract base classes Handler,
    Behaviour, Model, and is closely related with the abstract base class Task:
   </svelte:fragment>
  </AccordionItem>
  <AccordionItem>
   <svelte:fragment slot="lead">*</svelte:fragment>
   <svelte:fragment slot="summary">Connection</svelte:fragment>
   <svelte:fragment slot="content"
    >A Connection wraps an SDK or API and provides an interface to networks,
    ledgers or other services. Where necessary, a Connection is responsible for
    translating between the framework-specific Envelope with its Message and the
    external service or third-party protocol (e.g. HTTP). The framework provides
    one default Connection, called stub (current version fetchai/stub:0.21.0).
    It implements an I/O reader and writer to send Messages to the agent from a
    local file.
   </svelte:fragment>
  </AccordionItem>
 </Accordion>
</div>

<style>
 .info {
  padding: 20px;
  margin-top: 20px;
 }
</style>
